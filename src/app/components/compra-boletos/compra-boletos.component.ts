import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { Boleto, BoletosFactura, Cliente, Factura, Sala } from 'src/app/services/api-backend';
import { ComprasService } from 'src/app/services/api-backend/api/compras.service';
import { Pelicula } from 'src/app/services/api-backend/model/pelicula';
import { TodoCompra } from 'src/app/services/api-backend/model/todoCompra';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { SharedDataService } from 'src/app/services/utils/shared-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compra-boletos',
  templateUrl: './compra-boletos.component.html',
  styleUrls: ['./compra-boletos.component.scss']
})
export class CompraBoletosComponent implements OnInit {
  CodSala:number=0;
  CodFuncion:number=0;
  CodPelicula:number= 0;
  sala:Sala;
  CargoSala:boolean=false;
  isLinear = true;
  CantidadBoletos = new FormControl('');
  SeleccionadosBoletos = new FormControl('');
  TotalboletosAComprar=0;
  cantidadBoletosAdulto=0;
  cantidadBoletosAdultoMayor=0;
  cantidadBoletosNino=0;
  noEstanTodos:boolean=true;
  metodoPago:any='-'
  divInfoPelicula:boolean = false;
  User:UserModel;
  Pelicula:Pelicula;
  Cliente:Cliente={
    nombres:'',
    apellidos:'',
    nit:''
  };

  TotalFactura:number=0;
  // eventsSubscription:Subscription;

  @Output('CantidadSeleccionado') CantidadSeleccionado: EventEmitter<any>;
  constructor(
    private _shareData:SharedDataService,
    private router:Router,
    private _servicioCompras:ComprasService,
    private _autenticationService:AuthenticationService,
    
  ) {
    this.setState(this.CantidadBoletos,true),
    this.setState(this.SeleccionadosBoletos,true),
    this.CantidadSeleccionado = new EventEmitter<any>(); }

  ngOnInit(): void {
    this.cargarDatos()
    this.cargarCliente()
  }
  cargarCliente(){
     
     this._servicioCompras.comprasGetInfoClienteGet(this._autenticationService.userValue.codUser)
     .subscribe(result =>{
      this.Cliente = <Cliente>result
      
     }, error =>{
        console.log(error.error.error)
     })
    
    }
  cargarDatos(){
    this._shareData.shared$.subscribe(result =>{
      if(result.value){
        let datos:any = result.value
        if(datos.codFuncion && datos.codSala && datos.codPelicula){
          this.CodFuncion = Number.parseInt(datos.codFuncion);
          this.CodSala = Number.parseInt(datos.codSala);
          this.CodPelicula = Number.parseInt(datos.codPelicula);
          console.log('funcion: ',this.CodFuncion)
          console.log('CodSala: ',this.CodSala)
          console.log('CodPelicula: ',this.CodPelicula)
          this._servicioCompras.comprasGetPeliculaFuncionGet(this.CodFuncion)
          .subscribe(res =>{
            this.Pelicula = <Pelicula> res;
            this.divInfoPelicula = true;
          })
          this._servicioCompras.comprasGetAsientosSalaGet(this.CodSala,this.CodFuncion)
          .subscribe(result =>{
            this.sala = <Sala>result
            this.CargoSala=true;
          })
        }else{
          this.router.navigateByUrl('')
        }
      }
    })
  }

  setState(control: FormControl, state: boolean) {
    if (state) {
      control.setErrors({ "required": true })
    } else {
      control.reset()
    }
  }
  cantidadBoletos(){
    if(this.TotalboletosAComprar>0){
      return true
    }
    return false;
  }

  Aumentar(tipo:string){
    console.log(tipo)
    if(tipo=='A'){
      this.cantidadBoletosAdulto +=1
      this.TotalboletosAComprar +=1  
    }else if(tipo=='AM'){
      this.cantidadBoletosAdultoMayor +=1
      this.TotalboletosAComprar +=1  
    }else if(tipo=='N'){
      this.cantidadBoletosNino +=1  
      this.TotalboletosAComprar +=1
    }
  }

  Restar(tipo:string){
    if(tipo=='A'){
      if(this.cantidadBoletosAdulto>0){
        this.cantidadBoletosAdulto -=1  
        this.TotalboletosAComprar -=1
      }
    }else if(tipo=='AM'){
      if(this.cantidadBoletosAdultoMayor>0){
        this.cantidadBoletosAdultoMayor -=1  
        this.TotalboletosAComprar -=1
      }
    }else if(tipo=='N'){
      if(this.cantidadBoletosNino>0){
        this.cantidadBoletosNino -=1 
        this.TotalboletosAComprar -=1 
      }
    }
  }

  Siguiente(paso:number){
    if(paso==1){
      this.setState(this.CantidadBoletos,false)
    }else if(paso==2){
      this.setState(this.SeleccionadosBoletos,false)
    }
  }

  Cantidad(event){
    if(Number.parseInt(event)== this.TotalboletosAComprar){
      this.noEstanTodos = false
    }else{
      this.noEstanTodos = true;
    }
  }
  TotalBoletos(){
    let total = 0;
    total += this.cantidadBoletosAdulto*50;
    total += this.cantidadBoletosNino*35;
    total += this.cantidadBoletosAdultoMayor*40;
    this.TotalFactura = total; 
    return 'Q '+this.TotalFactura.toString();
  }
  Cargando:boolean = false;
  RealizarCompra(){
    let tempBoletosAdulto = this.cantidadBoletosAdulto;
    let totalBoletosNino = this.cantidadBoletosNino;
    let totalBoletosAdultoMayor = this.cantidadBoletosAdultoMayor;

    let boletos:Boleto[]=[];
    this.sala.asientos.forEach(e =>{
      if(e.usuarioAct == "S"){
        if(tempBoletosAdulto >0){
          let boleto={
            codFuncion:this.CodFuncion,
            codAsiento: e.codAsiento,
            codTipoBoleto: 1,
            usuarioIng:'fcaxaj'
          }
          boletos.push(boleto)
          tempBoletosAdulto -=1;
        }else if(totalBoletosNino >0){
          let boleto={
            codFuncion:this.CodFuncion,
            codAsiento: e.codAsiento,
            codTipoBoleto: 2,
            usuarioIng:'fcaxaj'
          }
          boletos.push(boleto)
          totalBoletosNino -=1;
        }else if(totalBoletosAdultoMayor >0){
          let boleto={
            codFuncion:this.CodFuncion,
            codAsiento: e.codAsiento,
            codTipoBoleto: 3,
            usuarioIng:'fcaxaj'
          }
          boletos.push(boleto)
          totalBoletosAdultoMayor -=1;
        }
      }
    })
    let factura:Factura={
      codCliente:this._autenticationService.userValue.codUser,
      codMetodoPago:Number.parseInt(this.metodoPago),
      usuarioIng:'fcaxaj',
      total:this.TotalFactura,
      iva:(this.TotalFactura*0.12)
    }

    let compra:TodoCompra={
      boletos:boletos,
      factura:factura
    }
    this.Cargando = true;
    Swal.fire({
      title:'Desea realizar la compra?',
      icon:'question',
      showCancelButton:true,
      cancelButtonText:'No, Cancelar',
      cancelButtonColor:'red',
      confirmButtonColor:'green',
      confirmButtonText:'Si, continuar'
    }).then(resulted => {
      if(resulted.isConfirmed){
        this._servicioCompras.comprasComprarBoletosPost(compra)
        .subscribe(result =>{
          if(result.estado){
            Swal.fire({
              title:'Correcto',
              text:'La compra fue realizada correctamente y se han enviado los boletos al correo electronico proporcionado.',
              icon:'success'
            }).then(res=>{
              if(res){
                this.Cargando = false
                this.router.navigateByUrl('/')
              }
            })
          }
        },error =>{
          Swal.fire({
            title:'Error',
            text:error.error.error,
            icon:error
          })
          this.Cargando = false
        })
      }else{
        this.Cargando = false;
      }
    })
  }

}
