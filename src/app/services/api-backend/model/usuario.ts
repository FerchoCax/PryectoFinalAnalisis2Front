/**
 * Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RolesUsuario } from './rolesUsuario';
import { SucursalesUsuario } from './sucursalesUsuario';


export interface Usuario { 
    codUsuario?: number;
    username?: string | null;
    password?: string | null;
    nombres?: string | null;
    apellidos?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    nit?: string | null;
    estado?: string | null;
    correo?: string | null;
    usuarioIng?: string | null;
    fechaIng?: string;
    usuarioAct?: string | null;
    fechaAct?: string | null;
    rolesUsuarios?: Array<RolesUsuario> | null;
    sucursalesUsuarios?: Array<SucursalesUsuario> | null;
}

