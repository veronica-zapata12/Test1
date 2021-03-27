import { Injectable } from '@angular/core';
import { DatosPersonales } from '../modelos/datos-personales';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { RespuestasMotivacion } from '../modelos/respuestasMotivacion';

@Injectable({
  providedIn: 'root'
})
export class MotivacionService {

  private motivacionTest:RespuestasMotivacion={
    datosPersonales: null,
    fecha:null,
    respuestas:null

  }; 
  
  private readonly nombreColeccion = 'resultado MotivacionTest';


  private coleccionResultado: AngularFirestoreCollection<RespuestasMotivacion>;

  private habilitar:boolean;
  constructor(afs: AngularFirestore) {
    this.coleccionResultado = afs.collection<RespuestasMotivacion>(this.nombreColeccion);
  }
  public agregarDatosPersonales(datosPersonales: DatosPersonales) {
    this.motivacionTest.datosPersonales = datosPersonales;
    //console.log(this.motivacionTest.datosPersonales);

  }
  public agregarRespuestas(seleccion: any[]): void {
    let element;
    const respuestas = [];
    for (let i = 0; i < seleccion.length; i++) {
      element = seleccion[i];
      respuestas.push(element.valor);
    }
    this.motivacionTest.respuestas = respuestas;
    //console.log(this.motivacionTest.respuestas);
    
  }
  public obtenerDatosPersonales(): DatosPersonales {
    return this.motivacionTest.datosPersonales;
  }
  public limpiarTodo(){
  this.motivacionTest={
    datosPersonales: null,
    fecha:null,
    respuestas:null
  };
}
public enviar(): Promise<any> {
  this.motivacionTest.fecha = new Date().toString().substring(0, 15);
  return this.coleccionResultado.add(this.motivacionTest);
}
}

