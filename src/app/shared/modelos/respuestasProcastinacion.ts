import { DatosPersonales } from "./datos-personales";

export interface RespuestasProcastincacion {
    
    datosPersonales: DatosPersonales;
    fecha: string;
    respuestas:any[];

}