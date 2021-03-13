import { DatosPersonales } from './datos-personales';

export interface RespuestasMotivacion {
    
        datosPersonales: DatosPersonales;
        fecha: string;
        respuestas:any[];
    
}