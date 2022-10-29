import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComprasService } from 'src/app/services/api-backend/api/compras.service';
import { Pelicula } from 'src/app/services/api-backend/model/pelicula';
import Swal from 'sweetalert2';
import { LectorcodigoQrComponent } from '../lectorcodigo-qr/lectorcodigo-qr.component';

@Component({
  selector: 'app-validacion-de-boletos',
  templateUrl: './validacion-de-boletos.component.html',
  styleUrls: ['./validacion-de-boletos.component.scss']
})
export class ValidacionDeBoletosComponent implements OnInit {

  constructor(private dialog:MatDialog, private _comprasService:ComprasService, private datePipe:DatePipe) { }
  Pelicula:Pelicula;
  encontroBoleto:boolean = false;
  objetoOtro:string='';
  codFuncion:number=0;
  codAsiento:number=0
  ngOnInit(): void {
  }
  escanearBoleto(){
    let dial = this.dialog.open(LectorcodigoQrComponent,{width:'80%'})
    
    dial.afterClosed().subscribe(res =>{
      if(res == 0){
        Swal.fire({
          title:'Codigo de boleto no valido',
          icon:'error'
        })
        return
      }
      this.cargarInformacionBoleto(res)
    })
  }
  cargarInformacionBoleto(objeto){
    
    this.objetoOtro = JSON.stringify(objeto)
    this._comprasService.comprasGetPeliculaFuncionGet(objeto.codFuncion)
    .subscribe(res => {
      this.codFuncion =objeto.codFuncion
      this.codAsiento = objeto.codAsiento
      this.objetoOtro = this.codAsiento.toString()
      this.encontroBoleto = true;

      this.Pelicula =<Pelicula>res;
      console.log(this.Pelicula)
    },error =>{
      this.objetoOtro = JSON.stringify(error)

      console.log(error)
    })
  }

  fecha(string){
    return this.datePipe.transform(string,'dd/MM/YYYY HH:mm')
  }
  validar(){
    this.objetoOtro = this.codAsiento.toString() +'  aaa'

    this._comprasService.comprasValidarBoletoPost(this.codFuncion, this.codAsiento)
    .subscribe(res =>{
      if(res.estado){
        Swal.fire({
          title:'Exito',
          text:'Boleto validado correctamente',
          icon:'success'
        })
        this.encontroBoleto = false;
      }
    },error =>{
      Swal.fire({
        title:'Error',
        text:error.error.error,
        icon:'error'
      })
      this.encontroBoleto = false;

    })
  }
}