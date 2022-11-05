import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Funcione, Sala, Sucursale } from 'src/app/services/api-backend';
import { FuncionesService } from 'src/app/services/api-backend/api/funciones.service';
import { ImagenesService } from 'src/app/services/api-backend/api/imagenes.service';
import { SalasService } from 'src/app/services/api-backend/api/salas.service';
import { SucursalesService } from 'src/app/services/api-backend/api/sucursales.service';
import { Pelicula } from 'src/app/services/api-backend/model/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.scss']
})
export class FuncionesComponent implements OnInit {
  Sucursales:Sucursale[]=[];
  Salas:Sala[]=[];
  Peliculas:Pelicula[] = [];
  FuncionesSala:Funcione[] = [];
  fechaInicio:string = '';
  fechaFin:string = '';
  existefuncion:boolean = false;
  peliculaSeleccionada = 0;
  salaSeleccionada = 0;
  constructor(private salasService:SalasService,
              private sucursalesService:SucursalesService,
              private imagenesService:ImagenesService,
              private funcionesService:FuncionesService,
              private datePipe:DatePipe
              ) { }

  ngOnInit(): void {
    this.CargarSucursales();
    this.CargarPeliculas();
  }

  CargarSucursales(){
    this.sucursalesService.sucursalesGetSucursalesGet().subscribe(res =>{
      this.Sucursales=<Sucursale[]>res;
    })
  }

  cargarSala(idSucursale){
    this.Salas = []
    this.salasService.getSalasPost(Number.parseInt(idSucursale.target.value))
    .subscribe(result =>{
      this.Salas = <Sala[]>result;

      // this.CargarfuncionesSala()
    })
  }

  CargarfuncionesSala(eve){
    this.FuncionesSala = []
    this.funcionesService.funcionesGetFuncionesSalaGet(Number.parseInt(eve.target.value)).subscribe(result =>{
      this.FuncionesSala = <Funcione[]> result
    })
  }

  cambioFechaInicio(){
    console.log(this.fechaInicio)
    let fecha= this.datePipe.transform(this.fechaInicio,"dd/MM/YYYY")
    let existe:boolean = false;
    this.FuncionesSala.forEach(e =>{
      let dateFunc = this.datePipe.transform(e.fechaHoraInicio,"dd/MM/YYYY")
      console.log(fecha == dateFunc)
      console.log(fecha , dateFunc)

      if(fecha == dateFunc){
        existe = true
      }
    })

    if(existe){
      this.existefuncion = true;
    }else{
      this.existefuncion = false
    }

  }
  CrearFunciones(){
    this.funcionesService.funcionesCrearFuncionesPost(this.peliculaSeleccionada,this.salaSeleccionada,this.fechaInicio,this.fechaFin)
    .subscribe(result =>{
      Swal.fire({
        title:'Funciones creadas correctamente',
        icon:'success'
      })
    })
  }
  cambioFechafin(){
    let fecha= this.datePipe.transform(this.fechaInicio,"dd/MM/YYYY")

    let existe:boolean = false;
    this.FuncionesSala.forEach(e =>{
      let dateFunc = this.datePipe.transform(e.fechaHoraInicio,"dd/MM/YYYY")
      console.log(fecha == dateFunc)
      console.log(fecha , dateFunc)
      
      if(fecha == dateFunc ){
        existe = true
      }
    })
    
    if(existe){
      this.existefuncion = true;
    }else{
      this.existefuncion = false
    }
  
  }
  CargarPeliculas(){
    this.imagenesService.imagenesGetPeliculasGet()
    .subscribe(result =>{
      this.Peliculas = <Pelicula[]>result
    })
  }

}
