import { Injectable } from '@angular/core';
import { DatosPersonales } from '../modelos/datos-personales';
import { RespuestasOtroTest } from '../modelos/respuestasOtroTest';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class OtroTestService {

  private otroTest:RespuestasOtroTest={
    datosPersonales: null,
    fecha:null,
    respuestas:null

  }; 
  
  private readonly nombreColeccion = 'resultado otroTest';


  private coleccionResultado: AngularFirestoreCollection<RespuestasOtroTest>;

  private habilitar:boolean;
  constructor(afs: AngularFirestore) {
    this.coleccionResultado = afs.collection<RespuestasOtroTest>(this.nombreColeccion);
  }
  public agregarDatosPersonales(datosPersonales: DatosPersonales) {
    this.otroTest.datosPersonales = datosPersonales;
    console.log(this.otroTest.datosPersonales);

  }
  public agregarRespuestas(seleccion: any[]): void {
    let element;
    const respuestas = [];
    for (let i = 0; i < seleccion.length; i++) {
      element = seleccion[i];
      respuestas.push(element.valor);
    }
    this.otroTest.respuestas = respuestas;
    console.log(this.otroTest.respuestas);
    
  }
  public obtenerDatosPersonales(): DatosPersonales {
    return this.otroTest.datosPersonales;
  }
  public limpiarTodo(){
  this.otroTest={
    datosPersonales: null,
    fecha:null,
    respuestas:null
  };
}
public enviar(): Promise<any> {
  this.otroTest.fecha = new Date().toString().substring(0, 15);
  return this.coleccionResultado.add(this.otroTest);
}
}
