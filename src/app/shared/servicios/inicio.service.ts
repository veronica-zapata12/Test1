import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private habilitar:string;
 
    constructor(){}
  
    public escogerTest (test:string):string{
      if (test =="otro-test"){
        return this.habilitar=test;
      }else if(test =="testPersonalidad"){
        return this.habilitar=test;
      }else if(test =="motivacion"){
        return this.habilitar=test;
      }
    }
    public habilitarTest(){
      return this.habilitar
    }
    public limpiarTodo(){
     this.habilitar= "";
    }
}
