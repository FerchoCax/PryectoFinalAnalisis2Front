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
import { Sala } from './sala';


export interface TiposSala { 
    codTipoSala?: number;
    descripcion?: string | null;
    activo?: string | null;
    usuarioIng?: string | null;
    fechaIng?: string;
    usuarioAct?: string | null;
    fechaAct?: string | null;
    salas?: Array<Sala> | null;
}

