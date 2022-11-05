import { Component, OnInit } from '@angular/core';
// import { Pelicula } from 'src/app/services/api-backend';
// import { PeliculasService } from 'src/app/services/api-backend/api/peliculas.service';
import { Pelicula } from 'src/app/services/api-backend/model/pelicula';
import Swal from 'sweetalert2';
import { PeliculaService } from 'src/app/services/api-backend/api/peliculas.service';
import { ClasificacionPelicula } from 'src/app/services/api-backend/model/clasificacionPelicula';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  nombrePelicula:string='';
  descripcionPelicula:string='';
  clasificacionPelicula:string='';

  dataClasificacion:ClasificacionPelicula[]=[];
  constructor(private servicioPel:PeliculaService) { }

  ngOnInit(): void {
      this.cargarClasificacion();
  }

  cargarClasificacion(){
    this.servicioPel.peliculasGetPeliculasGet()
    .subscribe(resultado=>{
      this.dataClasificacion = <Pelicula[]>resultado
      console.log(this.dataClasificacion)
    },error=>{
      console.log(error);
    })
  }
  
  cambioClasificacion(){
    this.cargarClasificacion()
  }

  crearPelicula(){
    Swal.fire({
      icon:'question',
      title:'Desea crear la pelicula ?',
      showCancelButton:true
    }).then(res =>{
      if(res.isConfirmed){
        let peliculaNueva:Pelicula={
          descripcion:this.descripcionPelicula,
          nombre:this.nombrePelicula,
          activa:'A',
          usuarioIng:'ktomas'
        }
        this.servicioPel.peliculasCrearPeliculaPost(peliculaNueva)
        .subscribe(resultado=>{
          if(resultado.estado==1){
            Swal.fire({
              icon:'success',
              title:'Pelicula creada con exito',
              
            })
            this.limpiarPantalla()
          }
        },error =>{console.log(error)})
      }
    })
  }
  limpiarPantalla(){
    this.nombrePelicula=''
    this.descripcionPelicula=''
    this.clasificacionPelicula=''
  }

}
