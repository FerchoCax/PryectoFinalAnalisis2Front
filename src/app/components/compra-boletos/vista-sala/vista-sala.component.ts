import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sala } from 'src/app/services/api-backend';

@Component({
  selector: 'app-vista-sala',
  templateUrl: './vista-sala.component.html',
  styleUrls: ['./vista-sala.component.scss']
})
export class VistaSalaComponent implements OnInit {
  
  @Input('Sala') Sala:Sala;
  letras:string[]=[];
  salaVisible=false;
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.Sala)
    this.CrearSala()
    console.log("Sala Creada;")
    console.log(this.letras)
  }

  CrearSala(){
    console.log(this.Sala)
    console.log(this.Sala.codTipoSala)

    if(this.Sala.codTipoSala == 1){
      console.log(this.Sala.codTipoSala)
      this.letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    }else if(this.Sala.codTipoSala == 2){
      this.letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    }
    else if(this.Sala.codTipoSala == 3){
      this.letras = ['A', 'B', 'C', 'B', 'D', 'E'];
    }
    console.log(this.letras)
    this.salaVisible= true;
  }

  filtroAsientos(fila:string){
    this.Sala.asientos[0].codTipoAsiento == 2
    return  this.Sala.asientos.filter(e => e.fila==fila)

  }
  
}
