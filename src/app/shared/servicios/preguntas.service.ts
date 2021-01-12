import { Injectable } from '@angular/core';
import { Preguntas } from '../modelos/preguntas';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { OrdenamientoService } from './ordenamiento.service';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private readonly nombreColeccion = 'preguntas-personalidad';

  private coleccionPreguntas: AngularFirestoreCollection<Preguntas>;

  private preguntas: Preguntas[];

  constructor(afs: AngularFirestore,
              private ordenamientoService: OrdenamientoService) {
    this.coleccionPreguntas = afs.collection<Preguntas>(this.nombreColeccion);
  }


  consultarPreguntas(): Observable<Preguntas[]> {
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
