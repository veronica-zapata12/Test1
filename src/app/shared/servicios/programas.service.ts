import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrdenamientoService } from './ordenamiento.service';
@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  private readonly nombreColeccion = 'programas';

  private coleccionTipoIdentificacion: AngularFirestoreCollection<string>;

  constructor(afs: AngularFirestore,
              private ordenamientoService: OrdenamientoService) {
    this.coleccionTipoIdentificacion = afs.collection<string>(this.nombreColeccion);
  }

  obtenerTodosProgramas(): Observable<string[]> {
    return this.coleccionTipoIdentificacion.valueChanges().pipe(map(tiposIdentificacion => {
      return tiposIdentificacion.sort(this.ordenamientoService.ascendentemente('descripcion'));
    }));
  }
}

