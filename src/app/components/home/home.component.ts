import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Sucursale } from 'src/app/services/api-backend';
import { ComprasService } from 'src/app/services/api-backend/api/compras.service';
import { ImagenesService } from 'src/app/services/api-backend/api/imagenes.service';
import { SucursalesService } from 'src/app/services/api-backend/api/sucursales.service';
import { Pelicula } from 'src/app/services/api-backend/model/pelicula';
import { SharedDataService } from 'src/app/services/utils/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Peliculas:Pelicula[]=[];
  Sucursales:Sucursale[]=[];
  constructor(
    private imagenesService:ImagenesService,
    private servicioCompras:ComprasService,
    private servicioSucursales:SucursalesService,
  ) { }

  ngOnInit(): void {
    this.cargarSucursales()
  }

  cargarSucursales(){
    this.Sucursales=[]
    this.servicioSucursales.sucursalesGetSucursalesGet()
    .subscribe(result =>{
      this.Sucursales = <Sucursale[]>result
    },error =>{
      console.log(error.error.error)
    })
  }
  cambioSucursales(event){
    console.log(event.target.value)
    this.Peliculas = []
    if(event.target.value!= '-'){
      this.servicioCompras.comprasGetPeliculasSucursalGet(event.target.value)
      .subscribe(result =>{
        this.Peliculas = <Pelicula[]>result
      },error=>{
        console.log(error)
      })
    }
  }
  
}
