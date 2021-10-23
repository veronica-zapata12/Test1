import { Component, OnInit } from '@angular/core';
import { Respuestas } from 'src/app/shared/modelos/respuestas';
import { PngFileService } from 'src/app/shared/servicios/png-file.service';
import { ReporteService } from 'src/app/shared/servicios/reporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resultado-personalizado',
  templateUrl: './resultado-personalizado.component.html',
  styleUrls: ['./resultado-personalizado.component.sass']
})
export class ResultadoPersonalizadoComponent implements OnInit {
  respuestas: Respuestas[];
  respuestasCopiar = [];
  respu;
  descripciondelPE = [];
  constructor(private reporteService: ReporteService,private pngFile:PngFileService) { }

  ngOnInit(): void {
    this.reporteService.obtenerTodos().subscribe(respuestas => {
      this.respuestas = respuestas;
           respuestas.forEach(row => {
        this.respuestasCopiar.push(row);
      });
    });
  }
  generar( documento:String){
    
    
    this.respu=this.respuestasCopiar.find(rsta=>{      

      if(rsta.datosPersonales.documento===documento){
        
        return rsta;
      }
      
    });
   if(this.respu ){
    if (this.respu.PE[0] < 5) {
      this.descripciondelPE.push("Fría, impersonal, distante");
    } else {
      this.descripciondelPE.push("Cálida, afable, generosa, atenta a los demás");
    }
    if (this.respu.PE[1] < 5) {
      this.descripciondelPE.push("De pensamiento concreto");
    } else {
      this.descripciondelPE.push("De pensamiento abstracto");
    }
    if (this.respu.PE[2] < 5) {
      this.descripciondelPE.push("Reactiva, emocionalmente cambiante");
    } else {
      this.descripciondelPE.push("Emocionalmente estable, adaptada, madura");
    }
    if (this.respu.PE[3] < 5) {
      this.descripciondelPE.push("Deferente, cooperadora, que evita conflictos");
    } else {
      this.descripciondelPE.push("Dominante, asertiva, competitiva");
    }
    if (this.respu.PE[4] < 5) {
      this.descripciondelPE.push("Seria, reprimida, cuidadosa");
    } else {
      this.descripciondelPE.push("Animosa, espontánea, activa, entusiasta");
    }
    if (this.respu.PE[5] < 5) {
      this.descripciondelPE.push("Inconformista, muy suya, indulgente");
    } else {
      this.descripciondelPE.push("Atenta a las normas, cumplidora, formal");
    }
    if (this.respu.PE[6] < 5) {
      this.descripciondelPE.push("Tímida, temerosa, cohibida");
    } else {
      this.descripciondelPE.push("Emprendedora, atrevida y segura en lo social");
    }
    if (this.respu.PE[7] < 5) {
      this.descripciondelPE.push("Objetiva, nada sentimental, utilitaria");
    } else {
      this.descripciondelPE.push("Sensible, esteta, sentimental");
    }
    if (this.respu.PE[8] < 5) {
      this.descripciondelPE.push("Confiada, sin sospechas, adaptable");
    } else {
      this.descripciondelPE.push("Vigilante, suspicaz, escéptica, precavida");
    }
    if (this.respu.PE[9] < 5) {
      this.descripciondelPE.push("Práctica, con los pies en tierra, realista");
    } else {
      this.descripciondelPE.push("Abstraida, imaginativa, idealista");
    }
    if (this.respu.PE[10] < 5) {
      this.descripciondelPE.push("Abierta, genuina, llana, natural ");
    } else {
      this.descripciondelPE.push("Privada, calculadora, discreta, que no se abre");
    }
    if (this.respu.PE[11] < 5) {
      this.descripciondelPE.push("Segura, despreocupada, satisfecha");
    } else {
      this.descripciondelPE.push("Aprensiva, insegura, preocupada");
    }
    if (this.respu.PE[12] < 5) {
      this.descripciondelPE.push("Tradicional, apegada a lo familiar");
    } else {
      this.descripciondelPE.push("Abierta al cambio, experimental, analítica");
    }
    if (this.respu.PE[13] < 5) {
      this.descripciondelPE.push("Seguidora, se integra en el grupo");
    } else {
      this.descripciondelPE.push("Autosuficiente, individualista, solitaria");
    }
    if (this.respu.PE[14] < 5) {
      this.descripciondelPE.push("Flexible, tolerante con el desorden o las faltas");
    } else {
      this.descripciondelPE.push("Perfeccionista, organizada, disciplinada");
    }
    if (this.respu.PE[15] < 5) {
      this.descripciondelPE.push("Relajada, plácida, paciente");
    } else {
      this.descripciondelPE.push("Tensa, enérgica, impaciente, intranquila");
    }
  }else{
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'No encontrado',
      text: 'El documento: '+ documento  + ' no existe',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Ok!'
    })
        
      }
    
    }
    public descargar() {
      this.pngFile.generar(document.getElementById('resultado'), this.respu.datosPersonales.nombre);
      setTimeout(()=>{
        this.respu=""
      },3000);
    }

}
