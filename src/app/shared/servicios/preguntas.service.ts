import { Injectable } from '@angular/core';
import { Preguntas } from '../modelos/preguntas';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { OrdenamientoService } from './ordenamiento.service';
import { preguntasAutoCotrol } from '../modelos/preguntasAutoCotrol';
import { PreguntasMotivacion } from '../modelos/preguntasMotivacion';
import { PreguntasProcastinacion } from '../modelos/preguntasProcastinacion';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private readonly nombreColeccionPersonalidad = 'preguntas-personalidad';
  private readonly nombreColeccionAutocontrol = 'preguntas-autocontrol-autoeficacia';
  private readonly nombreColeccionMotivacion = 'preguntas-motivacion-aprendizaje';
  private readonly nombreColeccionProcastinacion = 'preguntas-procastinacion';

  private coleccionPreguntasPersonalidad: AngularFirestoreCollection<Preguntas>;
  private coleccionPreguntasAutocontrol: AngularFirestoreCollection<preguntasAutoCotrol>;
  private coleccionPreguntasMotivacion: AngularFirestoreCollection<PreguntasMotivacion>;
  private coleccionPreguntasProcastinacion: AngularFirestoreCollection<PreguntasProcastinacion>;

  private preguntasPersonalidad: Preguntas[];
  private preguntasAutocontrol: preguntasAutoCotrol[];
  private preguntasMotivacion: PreguntasMotivacion[];
  private preguntasProcastinacion:PreguntasProcastinacion[];

  constructor(afs: AngularFirestore,
              private ordenamientoService: OrdenamientoService) {
    this.coleccionPreguntasPersonalidad = afs.collection<Preguntas>(this.nombreColeccionPersonalidad);
    this.coleccionPreguntasAutocontrol = afs.collection<preguntasAutoCotrol>(this.nombreColeccionAutocontrol);
    this.coleccionPreguntasMotivacion = afs.collection<PreguntasMotivacion>(this.nombreColeccionMotivacion);
    this.coleccionPreguntasProcastinacion=afs.collection<PreguntasProcastinacion>(this.nombreColeccionProcastinacion)

  }


  consultarPreguntasPersonalidad(): Observable<Preguntas[]> {
    let preguntasPersonalidadobservable = this.coleccionPreguntasPersonalidad.valueChanges().pipe(map(preguntas => {
      this.preguntasPersonalidad = preguntas.sort(this.ordenamientoService.ascendentemente('orden'));
      return preguntas;
    }));

    if (this.preguntasPersonalidad) {
      preguntasPersonalidadobservable = of(this.preguntasPersonalidad);
      
    }
    return preguntasPersonalidadobservable;
  }

 consultarPreguntasAutocontrol(): Observable<preguntasAutoCotrol[]> {
    let preguntasAutocontrolobservable = this.coleccionPreguntasAutocontrol.valueChanges().pipe(map(preguntas => {
      this.preguntasAutocontrol = preguntas.sort(this.ordenamientoService.ascendentemente('orden'));
      return preguntas;
    }));

    if (this.preguntasAutocontrol) {
      preguntasAutocontrolobservable = of(this.preguntasAutocontrol);
      
    }
    return preguntasAutocontrolobservable;
  }
  consultarPreguntasMotivacion(): Observable<PreguntasMotivacion[]> {
    let preguntasMotivacionobservable = this.coleccionPreguntasMotivacion.valueChanges().pipe(map(preguntas => {
      this.preguntasMotivacion = preguntas.sort(this.ordenamientoService.ascendentemente('orden'));
      return preguntas;
    }));

    if (this.preguntasMotivacion) {
      preguntasMotivacionobservable = of(this.preguntasMotivacion);
      
    }
    return preguntasMotivacionobservable;
  }
  consultarPreguntasProcastinacion(): Observable<PreguntasProcastinacion[]> {
    let preguntasprocastinacionobservable = this.coleccionPreguntasProcastinacion.valueChanges().pipe(map(preguntas => {
      this.preguntasProcastinacion = preguntas.sort(this.ordenamientoService.ascendentemente('orden'));
      return preguntas;
    }));

    if (this.preguntasProcastinacion) {
      preguntasprocastinacionobservable = of(this.preguntasProcastinacion);
      
    }
    return preguntasprocastinacionobservable;
  }
}
