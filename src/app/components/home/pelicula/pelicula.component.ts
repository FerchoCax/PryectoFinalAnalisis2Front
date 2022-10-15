import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesService } from 'src/app/services/api-backend/api/imagenes.service';
import { Pelicula } from 'src/app/services/api-backend/model/pelicula';
import { SharedDataService } from 'src/app/services/utils/shared-data.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {
  @Input('Pelicula') Pelicula:Pelicula;
  urlImagenPrincipal:string='';
  constructor(
    private datePipe:DatePipe,
    private router:Router,
    private shareData:SharedDataService,
    
  ) { }

  ngOnInit(): void {
    console.log(this.Pelicula);
    if(this.Pelicula.imagenes.filter(e => e.tipo_imagen ==1).length>0){
      this.urlImagenPrincipal = this.Pelicula.imagenes.filter(e => e.tipo_imagen ==1)[0].urlImagen

    }
  }
  formatoFecha(StringFecha){
    return this.datePipe.transform(StringFecha,'dd/MM HH:mm')
  }
  GoCompra(funcion,sala, pelicula){

    this.shareData.shareData({
      value:{
        codFuncion:funcion,
        codSala:sala,
        codPelicula:pelicula
      }
    })
    this.router.navigateByUrl('CompraBoletos')
  }

  

}
