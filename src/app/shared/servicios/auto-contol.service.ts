import { Injectable } from '@angular/core';
import { RespuestasAutoControl } from '../modelos/respuestasAutoControl';
import { DatosPersonales } from '../modelos/datos-personales';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AutoContolService {
  private autoControlTest:RespuestasAutoControl={
    datosPersonales: null,
    fecha:null,
    respuestas:null

  }; 
  
  private readonly nombreColeccion = 'resultado autocontrol y eficacia';


  private coleccionResultado: AngularFirestoreCollection<RespuestasAutoControl>;

  
  constructor(afs: AngularFirestore) {
    this.coleccionResultado = afs.collection<RespuestasAutoControl>(this.nombreColeccion);
  }
  public agregarDatosPersonales(datosPersonales: DatosPersonales) {
    this.autoControlTest.datosPersonales = datosPersonales;

  }
  public agregarRespuestas(seleccion: any[]): void {
    let element;
    const respuestas = [];
    for (let i = 0; i < seleccion.length; i++) {
      element = seleccion[i];
      respuestas.push(element.valor);
    }
    this.autoControlTest.respuestas = respuestas;
    
    
  }
  public obtenerDatosPersonales(): DatosPersonales {
    return this.autoControlTest.datosPersonales;
  }
  public limpiarTodo(){
  this.autoControlTest={
    datosPersonales: null,
    fecha:null,
    respuestas:null
  };
}
public enviar(): Promise<any> {
  this.autoControlTest.fecha = new Date().toString().substring(0, 15);
  return this.coleccionResultado.add(this.autoControlTest);
}
}
