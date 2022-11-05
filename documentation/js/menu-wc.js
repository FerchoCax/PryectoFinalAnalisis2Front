'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link" >ApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' : 'data-target="#xs-components-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' :
                                            'id="xs-components-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientescrearComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientescrearComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompraBoletosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompraBoletosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComprasPreviasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComprasPreviasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrearRolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrearRolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuncionesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FuncionesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImagenesPeliculaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagenesPeliculaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LectorcodigoQrComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LectorcodigoQrComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PDFViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PDFViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeliculaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeliculaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeliculasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeliculasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesUsuarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesUsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SalasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SucursalesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SucursalesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidacionDeBoletosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidacionDeBoletosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VistaSalaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VistaSalaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' : 'data-target="#xs-directives-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' :
                                        'id="xs-directives-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' }>
                                        <li class="link">
                                            <a href="directives/BlockCopyPasteDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockCopyPasteDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Configuration.html" data-type="entity-link" >Configuration</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomHttpParameterCodec.html" data-type="entity-link" >CustomHttpParameterCodec</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BeepService.html" data-type="entity-link" >BeepService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientesService.html" data-type="entity-link" >ClientesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComprasService.html" data-type="entity-link" >ComprasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomMatPaginator.html" data-type="entity-link" >CustomMatPaginator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepartamentosMunicipiosService.html" data-type="entity-link" >DepartamentosMunicipiosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FuncionesService.html" data-type="entity-link" >FuncionesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImagenesService.html" data-type="entity-link" >ImagenesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PeliculaService.html" data-type="entity-link" >PeliculaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesUsuarioService.html" data-type="entity-link" >RolesUsuarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SalasService.html" data-type="entity-link" >SalasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedDataService.html" data-type="entity-link" >SharedDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SucursalesService.html" data-type="entity-link" >SucursalesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WeatherForecastService.html" data-type="entity-link" >WeatherForecastService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Asiento.html" data-type="entity-link" >Asiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Boleto.html" data-type="entity-link" >Boleto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BoletosFactura.html" data-type="entity-link" >BoletosFactura</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CentrosProduccion.html" data-type="entity-link" >CentrosProduccion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClasificacionPelicula.html" data-type="entity-link" >ClasificacionPelicula</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cliente.html" data-type="entity-link" >Cliente</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationParameters.html" data-type="entity-link" >ConfigurationParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Departamento.html" data-type="entity-link" >Departamento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Factura.html" data-type="entity-link" >Factura</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Funcione.html" data-type="entity-link" >Funcione</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICarouselItem.html" data-type="entity-link" >ICarouselItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImagenPelicula.html" data-type="entity-link" >ImagenPelicula</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImagenPelicula-1.html" data-type="entity-link" >ImagenPelicula</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MetodosPago.html" data-type="entity-link" >MetodosPago</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Municipio.html" data-type="entity-link" >Municipio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pelicula.html" data-type="entity-link" >Pelicula</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Promociones.html" data-type="entity-link" >Promociones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reporte.html" data-type="entity-link" >Reporte</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RolesUsuario.html" data-type="entity-link" >RolesUsuario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sala.html" data-type="entity-link" >Sala</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sucursale.html" data-type="entity-link" >Sucursale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SucursalesUsuario.html" data-type="entity-link" >SucursalesUsuario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoBoleto.html" data-type="entity-link" >TipoBoleto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoImagen.html" data-type="entity-link" >TipoImagen</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TiposAsiento.html" data-type="entity-link" >TiposAsiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TiposSala.html" data-type="entity-link" >TiposSala</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TodoCompra.html" data-type="entity-link" >TodoCompra</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});