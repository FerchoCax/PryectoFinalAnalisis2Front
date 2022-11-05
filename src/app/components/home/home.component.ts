import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Sucursale } from 'src/app/services/api-backend';
import { ComprasService } from 'src/app/services/api-backend/api/compras.service';
import { ImagenesService } from 'src/app/services/api-backend/api/imagenes.service';
import { SucursalesService } from 'src/app/services/api-backend/api/sucursales.service';
import { Pelicula } from 'src/app/services/api-backend/model/pelicula';
import { SharedDataService } from 'src/app/services/utils/shared-data.service';
import { ICarouselItem } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Peliculas:Pelicula[]=[];
  Sucursales:Sucursale[]=[];
  dataCarruse:ICarouselItem[]=[]
  constructor(
    private imagenesService:ImagenesService,
    private servicioCompras:ComprasService,
    private servicioSucursales:SucursalesService,
    
  ) { }

  ngOnInit(): void {
    this.cargarSucursales()
    this.cargarPeliculas() 
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

  cargado:boolean = false;
  cargarPeliculas(){
    this.imagenesService.imagenesGetPeliculasGet()
    .subscribe(res =>{
      let data:Pelicula[] = <Pelicula[]>res
      console.log(data);
      
      let count:number = 0
      data.forEach(e =>{
        if(count <5){
          let item:ICarouselItem={
            id:e.codPelicula,
            title:{
              first:e.nombre,
              second:''
            },
            image:e.imagenes.length == 0 ? '': e.imagenes[0].urlImagen,
            link:'',
          
          }
          this.dataCarruse.push(item)
        }
        count +=1;
      })
      this.cargado = true;
      console.log(this.dataCarruse);
      
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
