import { Injectable } from '@angular/core';
import { Respuestas } from '../modelos/respuestas';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RespuestasOtroTest } from '../modelos/respuestasOtroTest';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
 /*
    * Nombre de la colección en firebase
     */
    private readonly nombreColeccion = 'resultado';
     /*
    * Nombre de la colección en firebase
     */
    private readonly nombreColeccionOtroTest = 'resultado otroTest';
    
    /**
     * Colección de Caegorías de hitos
     */
    private coleccionResultadoEncuesta: AngularFirestoreCollection<Respuestas>;
     /**
     * Colección de Caegorías de hitos
     */
    private coleccionResultadoEncuestaOtroTest: AngularFirestoreCollection<RespuestasOtroTest>;

    /**
     * constructor
     * @param afs servicio http firebase asincrono para consulta de las diferentes categorías de hitos
     * @param ordenamientoService servicio para ordenamiento de arreglos
     */
    constructor(afs: AngularFirestore) {
        this.coleccionResultadoEncuesta = afs.collection<Respuestas>(this.nombreColeccion);
        this.coleccionResultadoEncuestaOtroTest = afs.collection<RespuestasOtroTest>(this.nombreColeccionOtroTest);
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
    obtenerTodosOtroTest(): Observable<RespuestasOtroTest[]> {
      return this.coleccionResultadoEncuestaOtroTest.valueChanges();
    }
  }
