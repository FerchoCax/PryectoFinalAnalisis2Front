import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/services/api-backend/api/imagenes.service';
import { ImagenPelicula } from 'src/app/services/api-backend/model/imagenPelicula';
import { Pelicula } from 'src/app/services/api-backend/model/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imagenes-pelicula',
  templateUrl: './imagenes-pelicula.component.html',
  styleUrls: ['./imagenes-pelicula.component.scss']
})
export class ImagenesPeliculaComponent implements OnInit {
  peliculaSeleccionada = '-';
  peliculaSeleccionada2 = '-';
  Peliculas:Pelicula[] = [];
  tipoPelicula='-';
  nombreArchivo:string ='';
  ImagenesPelicula:ImagenPelicula[]=[]
  validFileTypes = ['image/png','image/jpeg'];
  archivoBase64;
  constructor(private imagenesService:ImagenesService,) { }

  ngOnInit(): void {
    this.CargarPeliculas()
  }

  CargarPeliculas(){
    this.imagenesService.imagenesGetPeliculasGet()
    .subscribe(result =>{
      this.Peliculas = <Pelicula[]>result
    })
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0]
      this.nombreArchivo = file.name
      console.log(file.type)
      console.log(file.type == 'image/jpeg');
      console.log(file.type=='image/png');
      
      if ((file.type == 'image/jpeg') || (file.type=='image/png')) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // console.log(reader.result)
          this.archivoBase64 = reader.result
        }
      }else{
        Swal.fire({
          title:'Tipo de archivo incorrecto',
          icon:'error'
        })
      }
      
    }
  }

  cargarImagen(){
    let stringbase64:string = this.archivoBase64

    let img:ImagenPelicula={
      cod_pelicula:Number.parseInt(this.peliculaSeleccionada),
      nombreimagen:this.nombreArchivo,
      imagenbase64:stringbase64.substring('data:image/jpeg;base64,'.length),
      tipo_imagen:Number.parseInt(this.tipoPelicula)
    }
    // console.log(img)
    // return
    this.imagenesService.imagenesCargarImagenPost(img)
    .subscribe(result =>{
      if(result.estado == 1){
        Swal.fire({
          title:'Imagen Subida correctamente',
          icon:'success'
        })
      }
    })
  }

  cargarImagenes(evenet){
    this.ImagenesPelicula=[]
    this.imagenesService.imagenesGetImagenerPeliculaGet(Number.parseInt(evenet.target.value))
    .subscribe(result =>{
      this.ImagenesPelicula=<ImagenPelicula[]>result
      console.log(this.ImagenesPelicula)
    })
  }

}
