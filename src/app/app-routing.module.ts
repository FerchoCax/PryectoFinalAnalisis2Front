import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'; 
import { LoginComponent } from './components/login/login.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { AuthGuard } from './helpers/auth.guard';
import { PDFViewerComponent } from './components/pdfviewer/pdfviewer.component';
import { RolesComponent } from './components/roles/roles.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { SalasComponent } from './components/salas/salas.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ImagenesPeliculaComponent } from './components/imagenes-pelicula/imagenes-pelicula.component';
import { HomeComponent } from './components/home/home.component';
import { CompraBoletosComponent } from './components/compra-boletos/compra-boletos.component';

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
        path:'Funciones',
        component:FuncionesComponent
      },
      {
        path:'Imagenes',
        component:ImagenesPeliculaComponent
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
