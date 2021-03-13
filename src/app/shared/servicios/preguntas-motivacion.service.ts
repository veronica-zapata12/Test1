import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { OrdenamientoService } from './ordenamiento.service';
import { PreguntasMotivacion } from '../modelos/preguntasMotivacion';

@Injectable({
  providedIn: 'root'
})
export class PreguntasMotivacionService {
  private readonly nombreColeccion = 'preguntas-motivacion-aprendizaje';

  private coleccionPreguntas: AngularFirestoreCollection<PreguntasMotivacion>;

  private preguntas: PreguntasMotivacion[];

  constructor(afs: AngularFirestore,
              private ordenamientoService: OrdenamientoService) {
    this.coleccionPreguntas = afs.collection<PreguntasMotivacion>(this.nombreColeccion);
  }


  consultarPreguntas(): Observable<PreguntasMotivacion[]> {
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
