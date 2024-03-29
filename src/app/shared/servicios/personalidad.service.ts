import { Injectable } from '@angular/core';
import { Respuestas } from '../modelos/respuestas';
import { DatosPersonales } from '../modelos/datos-personales';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root'
  })
export class PersonalidadService {
  private resultado: Respuestas = {
    datosPersonales: null,
    respuestas: null,
    fecha: null,
    PE: null,
    PD: null
  };


  private readonly nombreColeccion = 'resultado-personalidad';


  private coleccionResultado: AngularFirestoreCollection<Respuestas>;

  constructor(afs: AngularFirestore) {
    this.coleccionResultado = afs.collection<Respuestas>(this.nombreColeccion);
  }

  public agregarDatosPersonales(datosPersonales: DatosPersonales) {
    this.resultado.datosPersonales = datosPersonales;

  }

  public limpiarTodo() {
    this.resultado = {
      datosPersonales: null,
      respuestas: null,
      fecha: null,
      PE: null,
      PD: null
    }
  }

  public obtenerDatosPersonales(): DatosPersonales {
    return this.resultado.datosPersonales;
  }
  public obtenerPE(): number[] {
    return this.resultado.PE
  }
  public obtenerRespuestas(): number[] {
    return this.resultado.respuestas
  }

  public agregarRespuestas(seleccion: any[]): void {
    let element;
    const respuestas = [];
    for (let i = 0; i < seleccion.length; i++) {
      element = seleccion[i];
      respuestas.push(element.valor);
    }
    this.resultado.respuestas = respuestas;
  }
  public agregarPE(seleccion: any[]): void {
    let element;
    const pe = [];
    for (let i = 0; i < seleccion.length; i++) {
      element = seleccion[i];
      pe.push(element);
    }
    this.resultado.PE = pe;
  }
  public agregarPD(seleccion: any[]): void {
    let element;
    const pd = [];
    for (let i = 0; i < seleccion.length; i++) {
      element = seleccion[i];
      pd.push(element);
    }
    this.resultado.PD = pd;
  }
  public enviar(): Promise<any> {
    this.resultado.fecha = new Date().toString().substring(4, 15);
    return this.coleccionResultado.add(this.resultado);
  }
}


