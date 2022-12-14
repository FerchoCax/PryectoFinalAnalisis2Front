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
import { ClasificacionPelicula } from './clasificacionPelicula';
import { Funcione } from './funcione';
import { ImagenPelicula } from './imagenPelicula';


export interface Pelicula { 
    codPelicula?: number;
    codClasificacion?: number;
    nombre?: string | null;
    descripcion?: string | null;
    activa?: string | null;
    horas?: number;
    minutos?: number;
    usuarioIng?: string | null;
    fechaIng?: string;
    usuarioAct?: string | null;
    fechaAct?: string | null;
    codClasificacionNavigation?: ClasificacionPelicula;
    imagenes?: Array<ImagenPelicula> | null;
    funciones?:Array<Funcione> | null;
}

