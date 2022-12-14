import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'; 
import { LoginComponent } from './components/login/login.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { AuthGuard } from './helpers/auth.guard';
import { PDFViewerComponent } from './components/pdfviewer/pdfviewer.component';
import { RolesComponent } from './components/roles/roles.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ClientescrearComponent } from './components/clientescrear/clientescrear.component';
import { SalasComponent } from './components/salas/salas.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ImagenesPeliculaComponent } from './components/imagenes-pelicula/imagenes-pelicula.component';
import { HomeComponent } from './components/home/home.component';
import { CompraBoletosComponent } from './components/compra-boletos/compra-boletos.component';
import { ValidacionDeBoletosComponent } from './components/validacion-de-boletos/validacion-de-boletos.component';
import { ComprasPreviasComponent } from './components/compras-previas/compras-previas.component';
const routes: Routes = [
  {
    path: '',                        
    component: HomeLayoutComponent,
    children: [
      {
        path:'lectorPDF',
        canActivate:[AuthGuard],
        component: PDFViewerComponent
      },
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'Roles',
        // canActivate:[AuthGuard],
        component: RolesComponent
      },
      {
        path:'RegistrarCliente',
        component:ClientescrearComponent
      },
      {
        path:'ComprasPrevias',
        component:ComprasPreviasComponent
      },
      {
        path:'CompraBoletos',
        component:CompraBoletosComponent
      },
      {
        path:'Salas',
        component:SalasComponent
      },
      {
        path:'Sucursales',
        component:SucursalesComponent
      },
      {
        path:'Peliculas',
        component:PeliculasComponent
      },
      {
        path:'Funciones',
        component:FuncionesComponent
      },
      {
        path:'Imagenes',
        component:ImagenesPeliculaComponent
      },
      {
        path:'ValidacionBoleto',
        component:ValidacionDeBoletosComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent    
  }, 
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
