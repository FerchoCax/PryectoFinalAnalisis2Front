export * from './clientes.service';
import { ClientesService } from './clientes.service';
export * from './login.service';
import { LoginService } from './login.service';
export * from './roles.service';
import { RolesService } from './roles.service';
export * from './usuarios.service';
import { UsuariosService } from './usuarios.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [ClientesService, LoginService, RolesService, UsuariosService, WeatherForecastService];