import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/services/api-backend';
import { ComprasService } from 'src/app/services/api-backend/api/compras.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-compras-previas',
  templateUrl: './compras-previas.component.html',
  styleUrls: ['./compras-previas.component.scss']
})
export class ComprasPreviasComponent implements OnInit {

  constructor(
    private _autenticationService:AuthenticationService,
    private _servicioCompras:ComprasService,
    private dateP:DatePipe
  ) { }
  Cliente:Cliente={
    nombres:'',
    apellidos:'',
    nit:''
  };
  ngOnInit(): void {
    this.cargarPrevias()
  }
  cargarPrevias(){
    this._servicioCompras.comprasGetInfoClienteGet(this._autenticationService.userValue.codUser)
      .subscribe(result =>{
       this.Cliente = <Cliente>result
       console.log(this.Cliente);
       
      }, error =>{
         console.log(error.error.error)
      })
  }

  fecha(string){
    return this.dateP.transform(string,'short')
  }
  

}
