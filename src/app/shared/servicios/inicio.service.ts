import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private habilitar:boolean;
 
    constructor(){}
  
    public escogerTest (test:string):boolean{
      if (test ==="otroTest"){
        return this.habilitar=false
      }else{
        return this.habilitar;
      }
    }
    public habilitarTest(){
      return this.habilitar
    }
    public limpiarTodo(){
     this.habilitar= true;
    }
}
