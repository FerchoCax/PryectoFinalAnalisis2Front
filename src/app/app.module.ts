import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLayoutComponent } from './home/home-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/dialogs/alert/alert.component';
import { environment } from 'src/environments/environment';
import { CommonModule, DatePipe } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { NgxBarcodeModule } from 'ngx-barcode';
import { MatExpansionModule } from '@angular/material/expansion';
import { CookieService } from 'ngx-cookie-service';
import { MatBadgeModule } from '@angular/material/badge';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PDFViewerComponent } from './components/pdfviewer/pdfviewer.component';
import { CustomMatPaginator } from './models/CustomPaginator';
import { MatTreeModule } from '@angular/material/tree';
import { BlockCopyPasteDirective } from './directives/block-copy-paste.directive';
import { RolesComponent } from './components/roles/roles.component';
import { CrearRolesComponent } from './components/roles/crear-roles/crear-roles.component';
import { RolesUsuarioComponent } from './components/roles/roles-usuario/roles-usuario.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ClientescrearComponent } from './components/clientescrear/clientescrear.component';
import { SalasComponent } from './components/salas/salas.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ImagenesPeliculaComponent } from './components/imagenes-pelicula/imagenes-pelicula.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/home/pelicula/pelicula.component';
import { CompraBoletosComponent } from './components/compra-boletos/compra-boletos.component';
import { VistaSalaComponent } from './components/compra-boletos/vista-sala/vista-sala.component';
import { ValidacionDeBoletosComponent } from './components/validacion-de-boletos/validacion-de-boletos.component';
import { LectorcodigoQrComponent } from './components/lectorcodigo-qr/lectorcodigo-qr.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ComprasPreviasComponent } from './components/compras-previas/compras-previas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    LoginComponent,
    AlertComponent,
    PDFViewerComponent,
    BlockCopyPasteDirective,
    RolesComponent,
    CrearRolesComponent,
    RolesUsuarioComponent,
    SucursalesComponent,
    PeliculasComponent,
    ClientescrearComponent,
    SalasComponent,
    FuncionesComponent,
    ImagenesPeliculaComponent,
    HomeComponent,
    PeliculaComponent,
    CompraBoletosComponent,
    VistaSalaComponent,
    ValidacionDeBoletosComponent,
    LectorcodigoQrComponent,
    CarouselComponent,
    ComprasPreviasComponent
  ],
  entryComponents: [],
  imports: [
    NgxExtendedPdfViewerModule,
    ZXingScannerModule,
    NgxQRCodeModule,
    ReportViewerModule,
    NgxBarcodeModule,
    BarcodeScannerLivestreamModule,
    MatSlideToggleModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatBadgeModule,
    MatSliderModule,
    MatTreeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginator },
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    CookieService,
    DatePipe,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
