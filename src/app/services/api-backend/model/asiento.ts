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
import { TiposAsiento } from './tiposAsiento';
import { Boleto } from './boleto';


export interface Asiento { 
    codAsiento?: number;
    codTipoAsiento?: number;
    codSala?: number;
    fila?: string | null;
    numero?: string | null;
    usuarioIng?: string;
    fechaIng?: string | null;
    usuarioAct?: string | null;
    fechaAct?: string | null;
    codSalaNavigation?: Sala;
    codTipoAsientoNavigation?: TiposAsiento;
    boletos?: Array<Boleto> | null;
}

