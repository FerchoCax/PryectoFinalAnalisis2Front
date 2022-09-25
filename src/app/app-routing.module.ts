import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'; 
import { LoginComponent } from './components/login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthGuard } from './helpers/auth.guard';
import { PDFViewerComponent } from './components/pdfviewer/pdfviewer.component';
import { RolesComponent } from './components/roles/roles.component';

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
