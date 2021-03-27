import { Injectable } from '@angular/core';
import { Respuestas } from '../modelos/respuestas';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RespuestasMotivacion } from '../modelos/respuestasMotivacion';
import { RespuestasAutoControl } from '../modelos/respuestasAutoControl';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
 /*
    * Nombre de la colección en firebase
     */
    private readonly nombreColeccion = 'resultado personalidad';
     /*
    * Nombre de la colección en firebase
     */
    private readonly nombreColeccionAutocontrol = 'resultado autocontrol y eficacia';
    private readonly nombreColeccionMotivacionTest = 'resultado MotivacionTest';
   
    private coleccionResultadoEncuesta: AngularFirestoreCollection<Respuestas>;
    
    private coleccionResultadoEncuestaAutocontrol: AngularFirestoreCollection<RespuestasAutoControl>;
    private coleccionResultadoEncuestaMotivacionTest: AngularFirestoreCollection<RespuestasMotivacion>;

    /**
     * constructor
     * @param afs servicio http firebase asincrono para consulta de las diferentes categorías de hitos
     * @param ordenamientoService servicio para ordenamiento de arreglos
     */
    constructor(afs: AngularFirestore) {
        this.coleccionResultadoEncuesta = afs.collection<Respuestas>(this.nombreColeccion);
        this.coleccionResultadoEncuestaAutocontrol = afs.collection<RespuestasAutoControl>(this.nombreColeccionAutocontrol);
        this.coleccionResultadoEncuestaMotivacionTest = afs.collection<RespuestasMotivacion>(this.nombreColeccionMotivacionTest);
      }


    /**
     * Obtiene todas las respuestas de la encuesta
     */
    obtenerTodos(): Observable<Respuestas[]> {
      return this.coleccionResultadoEncuesta.valueChanges();
    }

    
    /**
     * Obtiene todas las respuestas de la encuesta
     */
    obtenerTodosAutocontrol(): Observable<RespuestasAutoControl[]> {
      return this.coleccionResultadoEncuestaAutocontrol.valueChanges();
    }
      /**
     * Obtiene todas las respuestas de la encuesta
     */
    obtenerTodosMotivacionTest(): Observable<RespuestasMotivacion[]> {
      return this.coleccionResultadoEncuestaMotivacionTest.valueChanges();
    }
  }
