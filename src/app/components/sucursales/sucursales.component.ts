import { Component, OnInit } from '@angular/core';
import { Departamento, Municipio, Sucursale } from 'src/app/services/api-backend';
import { DepartamentosMunicipiosService } from 'src/app/services/api-backend/api/departamentosMunicipios.service';
import { SucursalesService } from 'src/app/services/api-backend/api/sucursales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent implements OnInit {
  nombreSucursal:string='';
  direccionSucursal:string='';
  telefono:number=0;
  departamento:string='-';
  municipio:string='-';
  //Variables para los select
  dataDepartamentos:Departamento[]=[];
  dataMunicipios:Municipio[]=[];

  constructor(private servicioDepMun:DepartamentosMunicipiosService,
              private serivicioSucursales:SucursalesService) {   }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }
  cargarDepartamentos(){
    this.servicioDepMun.departamentosMunicipiosGetDepartamentosGet()
    .subscribe(resultado=>{
      this.dataDepartamentos = <Departamento[]>resultado
      console.log(this.dataDepartamentos)
    },error=>{
      console.log(error);
    })
  }
  cargarMunicipio(codDepartamento:string){
    if(codDepartamento!='-'){
      this.servicioDepMun.departamentosMunicipiosGetMunicipiosCodDepartentoGet(Number.parseInt(codDepartamento))
      .subscribe(resultado =>{
        this.dataMunicipios = <Municipio[]>resultado

      },error => {
        console.log(error)
      })
    }
  }
  cambioDepartamento(){
    this.cargarMunicipio(this.departamento)
  }

  crarSucursal(){
    Swal.fire({
      icon:'question',
      title:'Desea crear la sucursal?',
      showCancelButton:true
    }).then(res =>{
      if(res.isConfirmed){
        let sucursalNueva:Sucursale={
          codMunicipio: Number.parseInt(this.municipio),
          telefono:this.telefono.toString(),
          direccion:this.direccionSucursal,
          nombre:this.nombreSucursal,
          activa:'A',
          usuarioIng:'fcaxaj'
        }
        this.serivicioSucursales.sucursalesCrearSucursalPost(sucursalNueva)
        .subscribe(resultado=>{
          if(resultado.estado==1){
            Swal.fire({
              icon:'success',
              title:'Sucursal creada con exito',
              
            })
            this.limpiarPantalla()
          }
        },error =>{console.log(error)})
      }
    })
  }
  limpiarPantalla(){
    this.nombreSucursal=''
    this.direccionSucursal=''
    this.telefono=0
    this.departamento='-'
    this.municipio='-'
  }

}
