import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DatosPersonales } from '../modelos/datos-personales';
import { RespuestasInteresesProfesionales } from '../modelos/respuestasInteresesProfesionales';

@Injectable({
  providedIn: 'root'
})
export class InteresesProfesionalesService {

  private interesesProfesionalesTest:RespuestasInteresesProfesionales={
    datosPersonales: null,
    fecha:null,
    respuestas:null

  }; 
  
  private readonly nombreColeccion = 'resultado-intereses-profesionales';


  private coleccionResultadoIntereses: AngularFirestoreCollection<RespuestasInteresesProfesionales>;

 
  constructor(afs: AngularFirestore) {
    this.coleccionResultadoIntereses = afs.collection<RespuestasInteresesProfesionales>(this.nombreColeccion);
  }
  public agregarDatosPersonales(datosPersonales: DatosPersonales) {
    this.interesesProfesionalesTest.datosPersonales = datosPersonales;

  }
  public agregarRespuestas(seleccion: any[]): void {
    let element;
    const respuestas = [];
    for (let i = 0; i < seleccion.length; i++) {
      element = seleccion[i];
      respuestas.push(element.valor);
    }
    this.interesesProfesionalesTest.respuestas = respuestas;
    
  }
  public obtenerDatosPersonales(): DatosPersonales {
    return this.interesesProfesionalesTest.datosPersonales;
  }
  public limpiarTodo(){
  this.interesesProfesionalesTest={
    datosPersonales: null,
    fecha:null,
    respuestas:null
  };
}
public enviar(): Promise<any> {
  this.interesesProfesionalesTest.fecha = new Date().toString().substring(4, 15);
  console.log(this.interesesProfesionalesTest);
  return this.coleccionResultadoIntereses.add(this.interesesProfesionalesTest);
  
  
  
}
}