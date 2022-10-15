import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Sala } from 'src/app/services/api-backend';
import { ComprasService } from 'src/app/services/api-backend/api/compras.service';
import { SharedDataService } from 'src/app/services/utils/shared-data.service';

@Component({
  selector: 'app-compra-boletos',
  templateUrl: './compra-boletos.component.html',
  styleUrls: ['./compra-boletos.component.scss']
})
export class CompraBoletosComponent implements OnInit {
  CodSala:number=0;
  CodFuncion:number=0;
  CodPelicula:number= 0;
  sala:Sala;
  CargoSala:boolean=false;
  isLinear = true;
  CantidadBoletos = new FormControl('');
  TotalboletosAComprar=0;
  cantidadBoletosAdulto=0;
  cantidadBoletosAdultoMayor=0;
  cantidadBoletosNino=0;
  constructor(
    private _shareData:SharedDataService,
    private router:Router,
    private _servicioCompras:ComprasService
  ) {this.setState(this.CantidadBoletos,true) }

  ngOnInit(): void {
    this.cargarDatos()
  }
  cargarDatos(){
    this._shareData.shared$.subscribe(result =>{
      if(result.value){
        let datos:any = result.value
        if(datos.codFuncion && datos.codSala && datos.codPelicula){
          this.CodFuncion = Number.parseInt(datos.codFuncion);
          this.CodSala = Number.parseInt(datos.codSala);
          this.CodPelicula = Number.parseInt(datos.codPelicula);
          this._servicioCompras.comprasGetAsientosSalaGet(this.CodSala,this.CodFuncion)
          .subscribe(result =>{
            this.sala = <Sala>result
            this.CargoSala=true;
          })
        }else{
          this.router.navigateByUrl('')
        }
      }
    })
  }

  setState(control: FormControl, state: boolean) {
    if (state) {
      control.setErrors({ "required": true })
    } else {
      control.reset()
    }
  }
  cantidadBoletos(){
    if(this.TotalboletosAComprar>0){
      return true
    }
    return false;
  }

  Aumentar(tipo:string){
    console.log(tipo)
    if(tipo=='A'){
      this.cantidadBoletosAdulto +=1
      this.TotalboletosAComprar +=1  
    }else if(tipo=='AM'){
      this.cantidadBoletosAdultoMayor +=1
      this.TotalboletosAComprar +=1  
    }else if(tipo=='N'){
      this.cantidadBoletosNino +=1  
      this.TotalboletosAComprar +=1
    }
  }

  Restar(tipo:string){
    if(tipo=='A'){
      if(this.cantidadBoletosAdulto>0){
        this.cantidadBoletosAdulto -=1  
        this.TotalboletosAComprar -=1
      }
    }else if(tipo=='AM'){
      if(this.cantidadBoletosAdultoMayor>0){
        this.cantidadBoletosAdultoMayor -=1  
        this.TotalboletosAComprar -=1
      }
    }else if(tipo=='N'){
      if(this.cantidadBoletosNino>0){
        this.cantidadBoletosNino -=1 
        this.TotalboletosAComprar -=1 
      }
    }
  }

  Siguiente(paso:number){
    if(paso==1){
      this.setState(this.CantidadBoletos,false)
    }
  }

}
