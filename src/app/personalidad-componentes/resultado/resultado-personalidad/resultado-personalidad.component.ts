import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ResultadoService } from 'src/app/shared/servicios/resultado.service';

@Component({
  selector: 'app-resultado-personalidad',
  templateUrl: './resultado-personalidad.component.html',
  styleUrls: ['./resultado-personalidad.component.sass']
})
export class ResultadoPersonalidadComponent implements OnInit, AfterViewInit {

  public clasificacionPE = [];
  public descripciondelPE = [];

  constructor(private resultadoService: ResultadoService) { }

  ngOnInit(): void {
    this.clasificacionPE = this.resultadoService.obtenerPE();
    this.analisis();
  }
  ngAfterViewInit(): void {
    this.resultadoService.limpiarTodo();
  }

  analisis() {
    if (this.clasificacionPE[0] < 5) {
      this.descripciondelPE.push("Fría, impersonal, distante");
    } else {
      this.descripciondelPE.push("Cálida, afable, generosa, atenta a los demás");
    }
    if (this.clasificacionPE[1] < 5) {
      this.descripciondelPE.push("De pensamiento concreto");
    } else {
      this.descripciondelPE.push("De pensamiento abstracto");
    }
    if (this.clasificacionPE[2] < 5) {
      this.descripciondelPE.push("Reactiva, emocionalmente cambiante");
    } else {
      this.descripciondelPE.push("Emocionalmente estable, adaptada, madura");
    }
    if (this.clasificacionPE[3] < 5) {
      this.descripciondelPE.push("Deferente, cooperadora, que evita conflictos");
    } else {
      this.descripciondelPE.push("Dominante, asertiva, competitiva");
    }
    if (this.clasificacionPE[4] < 5) {
      this.descripciondelPE.push("Seria, reprimida, cuidadosa");
    } else {
      this.descripciondelPE.push("Animosa, espontánea, activa, entusiasta");
    }
    if (this.clasificacionPE[5] < 5) {
      this.descripciondelPE.push("Inconformista, muy suya, indulgente");
    } else {
      this.descripciondelPE.push("Atenta a las normas, cumplidora, formal");
    }
    if (this.clasificacionPE[6] < 5) {
      this.descripciondelPE.push("Tímida, temerosa, cohibida");
    } else {
      this.descripciondelPE.push("Emprendedora, atrevida y segura en lo social");
    }
    if (this.clasificacionPE[7] < 5) {
      this.descripciondelPE.push("Objetiva, nada sentimental, utilitaria");
    } else {
      this.descripciondelPE.push("Sensible, esteta, sentimental");
    }
    if (this.clasificacionPE[8] < 5) {
      this.descripciondelPE.push("Confiada, sin sospechas, adaptable");
    } else {
      this.descripciondelPE.push("Vigilante, suspicaz, escéptica, precavida");
    }
    if (this.clasificacionPE[9] < 5) {
      this.descripciondelPE.push("Práctica, con los pies en tierra, realista");
    } else {
      this.descripciondelPE.push("Abstraida, imaginativa, idealista");
    }
    if (this.clasificacionPE[10] < 5) {
      this.descripciondelPE.push("Abierta, genuina, llana, natural ");
    } else {
      this.descripciondelPE.push("Privada, calculadora, discreta, que no se abre");
    }
    if (this.clasificacionPE[11] < 5) {
      this.descripciondelPE.push("Segura, despreocupada, satisfecha");
    } else {
      this.descripciondelPE.push("Aprensiva, insegura, preocupada");
    }
    if (this.clasificacionPE[12] < 5) {
      this.descripciondelPE.push("Tradicional, apegada a lo familiar");
    } else {
      this.descripciondelPE.push("Abierta al cambio, experimental, analítica");
    }
    if (this.clasificacionPE[13] < 5) {
      this.descripciondelPE.push("Seguidora, se integra en el grupo");
    } else {
      this.descripciondelPE.push("Autosuficiente, individualista, solitaria");
    }
    if (this.clasificacionPE[14] < 5) {
      this.descripciondelPE.push("Flexible, tolerante con el desorden o las faltas");
    } else {
      this.descripciondelPE.push("Perfeccionista, organizada, disciplinada");
    }
    if (this.clasificacionPE[15] < 5) {
      this.descripciondelPE.push("Relajada, plácida, paciente");
    } else {
      this.descripciondelPE.push("Tensa, enérgica, impaciente, intranquila");
    }
  }

}

