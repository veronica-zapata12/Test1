import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioI } from '../modelos/usuario';
import{AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //public userData:Observable<firebase.User | null>
  constructor(private afAuth:AngularFireAuth) {
    //this.userData=this.afAuth.authState;
    
   }
   loginByEmail(login: UsuarioI){
     const {email,password}=login;
      return this.afAuth.signInWithEmailAndPassword(email,password);
     
   }
   logout(){
     this.afAuth.signOut();
   }
   isAuth() {  
    return this.afAuth.authState.pipe(map(auth => auth));
  }
}
