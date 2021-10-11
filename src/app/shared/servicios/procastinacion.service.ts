import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DatosPersonales } from '../modelos/datos-personales';
import { RespuestasProcastincacion } from '../modelos/respuestasProcastinacion';

@Injectable({
  providedIn: 'root'
})
export class ProcastinacionService {
  private procastinacionTest:RespuestasProcastincacion={
    datosPersonales: null,
    fecha:null,
    respuestas:null

  }; 
  
  private readonly nombreColeccion = 'resultado-procastinacion';


  private coleccionResultado: AngularFirestoreCollection<RespuestasProcastincacion>;

  
  constructor(afs: AngularFirestore) {
    this.coleccionResultado = afs.collection<RespuestasProcastincacion>(this.nombreColeccion);
  }
  public agregarDatosPersonales(datosPersonales: DatosPersonales) {
    this.procastinacionTest.datosPersonales = datosPersonales;

  }
  public agregarRespuestas(seleccion: any[]): void {
    let element;
    const respuestas = [];
    for (let i = 0; i < seleccion.length; i++) {
      element = seleccion[i];
      respuestas.push(element.valor);
    }
    this.procastinacionTest.respuestas = respuestas;
    
    
  }
  public obtenerDatosPersonales(): DatosPersonales {
    return this.procastinacionTest.datosPersonales;
  }
  public limpiarTodo(){
  this.procastinacionTest={
    datosPersonales: null,
    fecha:null,
    respuestas:null
  };
}
public enviar(): Promise<any> {
  this.procastinacionTest.fecha = new Date().toString().substring(0, 15);
  return this.coleccionResultado.add(this.procastinacionTest);
}
}
