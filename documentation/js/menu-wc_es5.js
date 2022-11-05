'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">frontend documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/ApiModule.html\" data-type=\"entity-link\" >ApiModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' : 'data-target="#xs-components-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' : 'id="xs-components-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AlertComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AlertComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CarouselComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CarouselComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ClientescrearComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ClientescrearComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CompraBoletosComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CompraBoletosComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ComprasPreviasComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ComprasPreviasComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CrearRolesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CrearRolesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FuncionesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FuncionesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeLayoutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeLayoutComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ImagenesPeliculaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ImagenesPeliculaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LectorcodigoQrComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LectorcodigoQrComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PDFViewerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PDFViewerComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PeliculaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PeliculaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PeliculasComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PeliculasComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RolesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RolesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RolesUsuarioComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RolesUsuarioComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SalasComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SalasComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SucursalesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SucursalesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ValidacionDeBoletosComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ValidacionDeBoletosComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VistaSalaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VistaSalaComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#directives-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' : 'data-target="#xs-directives-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"' : 'id="xs-directives-links-module-AppModule-40bf83834ced4e772d7d97c8e03e42ec5084692aac94c218b78a7a7a96f7515e75755996768c48ac31e5aa0d512e71be129df85d6cb484184ae9fc3ff9c898d8"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/BlockCopyPasteDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BlockCopyPasteDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Configuration.html\" data-type=\"entity-link\" >Configuration</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CustomHttpParameterCodec.html\" data-type=\"entity-link\" >CustomHttpParameterCodec</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UserModel.html\" data-type=\"entity-link\" >UserModel</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthenticationService.html\" data-type=\"entity-link\" >AuthenticationService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BeepService.html\" data-type=\"entity-link\" >BeepService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ClientesService.html\" data-type=\"entity-link\" >ClientesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ComprasService.html\" data-type=\"entity-link\" >ComprasService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/CustomMatPaginator.html\" data-type=\"entity-link\" >CustomMatPaginator</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DepartamentosMunicipiosService.html\" data-type=\"entity-link\" >DepartamentosMunicipiosService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/FuncionesService.html\" data-type=\"entity-link\" >FuncionesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ImagenesService.html\" data-type=\"entity-link\" >ImagenesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoginService.html\" data-type=\"entity-link\" >LoginService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PeliculaService.html\" data-type=\"entity-link\" >PeliculaService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RolesService.html\" data-type=\"entity-link\" >RolesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RolesUsuarioService.html\" data-type=\"entity-link\" >RolesUsuarioService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SalasService.html\" data-type=\"entity-link\" >SalasService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SharedDataService.html\" data-type=\"entity-link\" >SharedDataService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SucursalesService.html\" data-type=\"entity-link\" >SucursalesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UsuariosService.html\" data-type=\"entity-link\" >UsuariosService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/WeatherForecastService.html\" data-type=\"entity-link\" >WeatherForecastService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/ErrorInterceptor.html\" data-type=\"entity-link\" >ErrorInterceptor</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interceptors/JwtInterceptor.html\" data-type=\"entity-link\" >JwtInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Asiento.html\" data-type=\"entity-link\" >Asiento</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Boleto.html\" data-type=\"entity-link\" >Boleto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/BoletosFactura.html\" data-type=\"entity-link\" >BoletosFactura</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CentrosProduccion.html\" data-type=\"entity-link\" >CentrosProduccion</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ClasificacionPelicula.html\" data-type=\"entity-link\" >ClasificacionPelicula</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Cliente.html\" data-type=\"entity-link\" >Cliente</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ConfigurationParameters.html\" data-type=\"entity-link\" >ConfigurationParameters</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Departamento.html\" data-type=\"entity-link\" >Departamento</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Factura.html\" data-type=\"entity-link\" >Factura</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Funcione.html\" data-type=\"entity-link\" >Funcione</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ICarouselItem.html\" data-type=\"entity-link\" >ICarouselItem</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ImagenPelicula.html\" data-type=\"entity-link\" >ImagenPelicula</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ImagenPelicula-1.html\" data-type=\"entity-link\" >ImagenPelicula</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Login.html\" data-type=\"entity-link\" >Login</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MetodosPago.html\" data-type=\"entity-link\" >MetodosPago</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Municipio.html\" data-type=\"entity-link\" >Municipio</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Pelicula.html\" data-type=\"entity-link\" >Pelicula</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Promociones.html\" data-type=\"entity-link\" >Promociones</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Reporte.html\" data-type=\"entity-link\" >Reporte</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Role.html\" data-type=\"entity-link\" >Role</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RolesUsuario.html\" data-type=\"entity-link\" >RolesUsuario</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Sala.html\" data-type=\"entity-link\" >Sala</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Sucursale.html\" data-type=\"entity-link\" >Sucursale</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SucursalesUsuario.html\" data-type=\"entity-link\" >SucursalesUsuario</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TipoBoleto.html\" data-type=\"entity-link\" >TipoBoleto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TipoImagen.html\" data-type=\"entity-link\" >TipoImagen</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TiposAsiento.html\" data-type=\"entity-link\" >TiposAsiento</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TiposSala.html\" data-type=\"entity-link\" >TiposSala</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TodoCompra.html\" data-type=\"entity-link\" >TodoCompra</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Usuario.html\" data-type=\"entity-link\" >Usuario</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));