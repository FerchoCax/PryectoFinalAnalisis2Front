import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'; 
import { LoginComponent } from './components/login/login.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { AuthGuard } from './helpers/auth.guard';
import { PDFViewerComponent } from './components/pdfviewer/pdfviewer.component';
import { RolesComponent } from './components/roles/roles.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ClientescrearComponent } from './components/clientescrear/clientescrear.component';

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
        path:'Roles',
        // canActivate:[AuthGuard],
        component: RolesComponent
      },
      {
        path:'RegistrarCliente',
        component:ClientescrearComponent
      },
      {
        path:'Sucursales',
        component:SucursalesComponent
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
