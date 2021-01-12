import { DatosPersonales } from './datos-personales';

export interface Respuestas {
    datosPersonales: DatosPersonales;
    respuestas:any[];
    PD:any[];
    PE:any[];
    fecha: string;
}