import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Asiento, Sala } from 'src/app/services/api-backend';

@Component({
  selector: 'app-vista-sala',
  templateUrl: './vista-sala.component.html',
  styleUrls: ['./vista-sala.component.scss']
})
export class VistaSalaComponent implements OnInit {
  
  @Input('Sala') Sala:Sala;
  @Input('Maximos') Maximo:number = 0;
  @Output() CantidadSeleccionado: EventEmitter<number>;
  letras:string[]=[];
  salaVisible=false;
  constructor() {
    this.CantidadSeleccionado = new EventEmitter<number>();
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
  SeleccionAciento(asiento:Asiento){
    if(this.Sala.asientos.filter(e => e.usuarioAct=="S").length ==this.Maximo){
      this.Sala.asientos.forEach(e =>{
        if(e.codAsiento == asiento.codAsiento){
          if(e.usuarioAct =="S"){
            e.usuarioAct=null;
          }
        }
        
      })
      console.log(this.Sala.asientos.filter(e => e.codAsiento == asiento.codAsiento))
    }else{
      this.Sala.asientos.forEach(e =>{
        if(e.codAsiento == asiento.codAsiento){
          if(e.usuarioAct==null){
            e.usuarioAct="S"
          }else if(e.usuarioAct =="S"){
            e.usuarioAct=null;
          }
        }
        
      })
      console.log(this.Sala.asientos.filter(e => e.codAsiento == asiento.codAsiento))
    }
    this.CantidadSeleccionado.emit(this.Sala.asientos.filter(e => e.usuarioAct=="S").length)
    
  }
  
}
