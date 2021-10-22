import { Injectable } from '@angular/core';
import { Respuestas } from '../modelos/respuestas';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RespuestasMotivacion } from '../modelos/respuestasMotivacion';
import { RespuestasAutoControl } from '../modelos/respuestasAutoControl';
import { RespuestasProcastincacion } from '../modelos/respuestasProcastinacion';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
 /*
    * Nombre de la colección en firebase
     */
    private readonly nombreColeccion = 'resultado-personalidad';
     /*
    * Nombre de la colección en firebase
     */
    private readonly nombreColeccionAutocontrol = 'resultado-autocontrol-eficacia';
    private readonly nombreColeccionMotivacionTest = 'resultado-motivacion';
    private readonly nombreColeccionProcastinacionTest = 'resultado-procastinacion';
   
    private coleccionResultadoEncuesta: AngularFirestoreCollection<Respuestas>;
    
    private coleccionResultadoEncuestaAutocontrol: AngularFirestoreCollection<RespuestasAutoControl>;
    private coleccionResultadoEncuestaMotivacionTest: AngularFirestoreCollection<RespuestasMotivacion>;
    private coleccionResultadoEncuestaProcastinacion: AngularFirestoreCollection<RespuestasProcastincacion>;
    
    constructor(afs: AngularFirestore) {
        this.coleccionResultadoEncuesta = afs.collection<Respuestas>(this.nombreColeccion);
        this.coleccionResultadoEncuestaAutocontrol = afs.collection<RespuestasAutoControl>(this.nombreColeccionAutocontrol);
        this.coleccionResultadoEncuestaMotivacionTest = afs.collection<RespuestasMotivacion>(this.nombreColeccionMotivacionTest);
        this.coleccionResultadoEncuestaProcastinacion=afs.collection<RespuestasProcastincacion>(this.nombreColeccionProcastinacionTest);
      }


    /**
     * Obtiene todas las respuestas del test de personalidad
     */
    obtenerTodos(): Observable<Respuestas[]> {
      return this.coleccionResultadoEncuesta.valueChanges();
    }

    
    /**
     * Obtiene todas las respuestas del test de autocontrol
     */
    obtenerTodosAutocontrol(): Observable<RespuestasAutoControl[]> {
      return this.coleccionResultadoEncuestaAutocontrol.valueChanges();
    }
      /**
     * Obtiene todas las respuestas del test de motivacion
     */
    obtenerTodosMotivacionTest(): Observable<RespuestasMotivacion[]> {
      return this.coleccionResultadoEncuestaMotivacionTest.valueChanges();
    }
    obtenerTodosProcastinacionTest(): Observable<RespuestasProcastincacion[]> {
      return this.coleccionResultadoEncuestaProcastinacion.valueChanges();
    }
  }
