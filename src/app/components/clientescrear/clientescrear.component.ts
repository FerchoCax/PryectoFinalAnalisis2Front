import { Component, OnInit } from '@angular/core';
import { Result } from '@zxing/library';
import { Cliente, ClientesService } from 'src/app/services/api-backend';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientescrear',
  templateUrl: './clientescrear.component.html',
  styleUrls: ['./clientescrear.component.scss']
})
export class ClientescrearComponent implements OnInit {
  usernameCliente:String='';
  contraCliente:String=''
  nombreCliente:String=''
  apellidoCliente:String=''
  telefonoCliente:number=0;
  direccionCliente:String=''
  nitCliente:String=''
  correoCliente:String=''

  constructor(private servicioCrearCliente:ClientesService) { }

  ngOnInit(): void {
  }


  crearcliente(){
    Swal.fire({
      icon:'question',
      title: 'Deseas Registrarte?',
      showCancelButton:true
    }).then(res => {
      if(res.isConfirmed){
        let clienteNuevo:Cliente={
          username: this.usernameCliente.toString(),
          password: this.contraCliente.toString(),
          nombres:  this.nombreCliente.toString(),
          apellidos: this.apellidoCliente.toString(),
          telefono: this.telefonoCliente.toString(),
          direccion: this.direccionCliente.toString(),
          nit: this.nitCliente.toString(),
          correo: this.correoCliente.toString(),
          usuarioIng: 'Fcaxaj'

        }
        this.servicioCrearCliente.clientesCrearClientePost(clienteNuevo)
        .subscribe(resultado=>{
          if (resultado == 1) {
            Swal.fire({
              icon:'success',
              title: 'Te registraste correctamente!',
          })
          this.usernameCliente='';
          this.contraCliente=''
          this.nombreCliente=''
          this.apellidoCliente=''
          this.telefonoCliente=0;
          this.direccionCliente=''
          this.nitCliente=''
          this.correoCliente=''
        }          
      })
        }
    })
  }

}
