import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Role, RolesService, RolesUsuario } from 'src/app/services/api-backend';
import { RolesUsuarioService } from 'src/app/services/api-backend/api/rolesUsuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles-usuario',
  templateUrl: './roles-usuario.component.html',
  styleUrls: ['./roles-usuario.component.scss']
})
export class RolesUsuarioComponent implements OnInit {
  idUsuario:number = 0;
  idUsuarioAgregar:number = 0;
  //Variables de la Tabla roles usuario
  DataRolesUsuario:RolesUsuario[] =[];
  DataSourceRolesUsuario:MatTableDataSource<RolesUsuario>;
  @ViewChild(MatPaginator) PaginatorRolesUsario:MatPaginator;
  @ViewChild(MatTable) TablaRolesUsuario:MatTable<RolesUsuario>
  ColumnasTablaRolesUsuario:string[] =['rol','fechaIngreso','accion'];
  //Variables de la tabla de roles
  DataRoles:Role[] = [];
  DataSourceRoles:MatTableDataSource<Role>;
  @ViewChild(MatTable) TablaRoles: MatTable<Role>;
  @ViewChild("#paginator") paginatorRoles : MatPaginator;
  columnasTablaRoles:string[] = ['nombre','estado','fechaIngreso','accion']
  constructor(private servicioRolesUsuario:RolesUsuarioService,
            private servicioRoles:RolesService) { }

  ngOnInit(): void {
    this.cargarDatosRoles();
  }

  buscarRolesUsuario(){
    this.DataRolesUsuario = [];
    console.log(this.idUsuario);
    this.servicioRolesUsuario.rolesUsuarioGetRolesUsuarioGet(this.idUsuario).subscribe(resultado=>{
      this.DataRolesUsuario = <RolesUsuario[]> resultado;
      this.DataSourceRolesUsuario = new MatTableDataSource(this.DataRolesUsuario);
      setTimeout(() =>{
        this.DataSourceRolesUsuario.paginator = this.PaginatorRolesUsario;
      },50)
    },error =>{
      console.log(error)
    })
  }

  eliminarRol(elemento:RolesUsuario){
    Swal.fire({
      title:'Desea eliminar este rol al usuario?',
      showCancelButton:true,

    }).then(res =>{
      if(res.isConfirmed){
        this.servicioRolesUsuario.rolesUsuarioEliminarRolUsuarioPost(elemento.codRol,elemento.codUsuario)
        .subscribe(result =>{
          if(result.estado==1){
            Swal.fire({
              title:'Se elimino el rol correctamente',
              icon:'success'
            })
            this.buscarRolesUsuario()
          }
        },error =>{
          console.log(error)
        })
      }
    })
  }

  agregarRolUsuario(elemto:Role){
    Swal.fire({
      title:'Desea agregar este rol al usuario?',
      showCancelButton:true,
    }).then(res =>{
      if(res.isConfirmed){
        let rolUsuario:RolesUsuario={
          codRol:elemto.colRol,
          codUsuario: this.idUsuarioAgregar,
          usuarioIng:'fcaxaj'
        }
        this.servicioRolesUsuario.rolesUsuarioAgregarRolUsuarioPost(rolUsuario)
        .subscribe(result =>{
          if(result.estado==1){
            Swal.fire({
              title:'El rol se agrego correctamente!!!',
              icon:'success'
            })
            this.buscarRolesUsuario()
          }
        },error =>{
          console.log(error)
        })
      }
    })
  }

  cargarDatosRoles(){
    this.DataRoles=[];
    this.servicioRoles.rolesGetRolesGet().subscribe(result =>{
      this.DataRoles = <Role[]> result;
      this.DataSourceRoles = new MatTableDataSource(this.DataRoles);
      setTimeout(() => {
        
        this.DataSourceRoles.paginator = this.paginatorRoles;
      }, 50);
    },error =>{
      Swal.fire({
        title:'Error',
        text:error.error.error,
        icon:'error'
      })
    })
  }
}
