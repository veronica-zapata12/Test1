import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablaMujeresService {
  /**
   * estas son las variables ya determinadas para hacer los 
   * calculos del PE
   */
  A = [1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9];
  B = [1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 6, 7, 8, 9, 10, 10];
  C = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 9];
  E = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 7, 7, 8, 9, 10];
  F = [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 7, 7, 8, 9];
  G = [1, 1, 1, 1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 10];
  H = [2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 8];
  I = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 7, 8, 8, 9];
  L = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 10];
  M = [3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10];
  N = [1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 10];
  O = [2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 9];
  Q1 = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 7, 7, 8, 8, 8, 9, 10, 10, 10, 10];
  Q2 = [3, 4, 4, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 10];
  Q3 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6, 7, 7, 8, 9];
  Q4 = [2, 3, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10];
  MI = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 9, 10];
  IN = [4, 7, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  QA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

  constructor() { }
  /**
   * busca en cada variable dependiendo del PD
   * @param indice es el resultado de PD 
   */
  public calcularA(indice: number): number {
    return this.A[indice];
  }
  public calcularB(indice: number): number {
    return this.B[indice];
  }
  public calcularC(indice: number): number {
    return this.C[indice];
  }
  public calcularE(indice: number): number {
    return this.E[indice];
  }
  public calcularF(indice: number): number {
    return this.F[indice];
  }
  public calcularG(indice: number): number {
    return this.G[indice];
  }
  public calcularH(indice: number): number {
    return this.H[indice];
  }
  public calcularI(indice: number): number {
    return this.I[indice];
  }
  public calcularL(indice: number): number {
    return this.L[indice];
  }
  public calcularM(indice: number): number {
    return this.M[indice];
  }
  public calcularN(indice: number): number {
    return this.N[indice];
  }
  public calcularO(indice: number): number {
    return this.O[indice];
  }
  public calcularQ1(indice: number): number {
    return this.Q1[indice];
  }
  public calcularQ2(indice: number): number {
    return this.Q2[indice];
  }
  public calcularQ3(indice: number): number {
    return this.Q3[indice];
  }
  public calcularQ4(indice: number): number {
    return this.Q4[indice];
  }
  public calcularMI(indice: number): number {
    return this.MI[indice];
  }
  public calcularIN(indice: number): number {
    return this.IN[indice];
  }
  public calcularQA(indice: number): number {
    return this.QA[indice];
  }
}
