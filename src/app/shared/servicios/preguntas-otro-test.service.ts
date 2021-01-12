import { Injectable } from '@angular/core';
import { PreguntasOtroTest } from '../modelos/preguntasOtroTest';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { OrdenamientoService } from './ordenamiento.service';


@Injectable({
  providedIn: 'root'
})
export class PreguntasOtroTestService {

  private readonly nombreColeccion = 'preguntas-otro-test';

  private coleccionPreguntas: AngularFirestoreCollection<PreguntasOtroTest>;

  private preguntas: PreguntasOtroTest[];

  constructor(afs: AngularFirestore,
              private ordenamientoService: OrdenamientoService) {
    this.coleccionPreguntas = afs.collection<PreguntasOtroTest>(this.nombreColeccion);
  }


  consultarPreguntas(): Observable<PreguntasOtroTest[]> {
    let preguntasobservable = this.coleccionPreguntas.valueChanges().pipe(map(preguntas => {
      this.preguntas = preguntas.sort(this.ordenamientoService.ascendentemente('orden'));
      return preguntas;
    }));

    if (this.preguntas) {
      preguntasobservable = of(this.preguntas);
      
    }
    return preguntasobservable;
  }
}
