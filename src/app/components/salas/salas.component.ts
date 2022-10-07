import { Component, OnInit } from '@angular/core';
import { Sala, Sucursale } from 'src/app/services/api-backend';
import { SalasService } from 'src/app/services/api-backend/api/salas.service';
import { SucursalesService } from 'src/app/services/api-backend/api/sucursales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit {
  nombreSala:string='';
  tipoSala:string='-';
  sucursales:Sucursale[] = [];
  sucursalSelecionada:string = '-';

  constructor(private servicioSucursales:SucursalesService,
              private servicioSalas:SalasService) { }

  ngOnInit(): void {
    this.cargarSucursales()
  }
  cargarSucursales(){
    this.servicioSucursales.sucursalesGetSucursalesGet().subscribe(result =>{
      console.log(result);
      this.sucursales = <Sucursale[]> result
    })
  }
  crearSucursal(){
    Swal.fire({
      title:'Desea crear la sucursal?',
      icon:'question',
      showCancelButton:true,
      cancelButtonColor:'red'
    }).then(res=>{
      if(res.isConfirmed){
        let sal:Sala={
          codSucursal: Number.parseInt(this.sucursalSelecionada),
          codTipoSala: Number.parseInt(this.tipoSala),
          nombre: this.nombreSala,
        }
        this.servicioSalas.crearSalaPost(sal).subscribe(result=>{
          if(result.estado==2){
            Swal.fire({
              title:'Sala creada correctamente!!!',
              icon:'success',
              }).then(re =>{
                this.limpiarDatos()
              })
          }
        })
      }
    })
  }

  limpiarDatos(){
    this.sucursalSelecionada='-';
    this.tipoSala='-';
    this.nombreSala='';
  }
}
