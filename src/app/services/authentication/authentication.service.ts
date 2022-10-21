import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserModel } from "src/app/models/UserModel";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<UserModel>;
  public user: Observable<UserModel>;
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    // this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): UserModel {
    return this.userSubject.value;
  }

  login(username: string, password: string, colaborador:boolean) {
    
    let letra:string = 'C';
    if(colaborador){
      letra="U";
    }
    return this.http.post<any>(`${environment.apiUrl}/Login/`+letra, { "username": username, "password": password }).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);

      return user;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('centroActual')
    this.loggedIn.next(false);
    this.userSubject.next(null);
    // this.router.navigate(['/login']);
  }

  validarRol(roles: string[]) {
    if(this.userValue==null){
      return false;
    }
    let usuarioValido=false;
    this.userValue.roles.forEach(rol => {
        if(roles.includes(rol)){
            usuarioValido = true;
        }
    });
    return usuarioValido;
  };
}