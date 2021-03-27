import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AutoContolService } from 'src/app/shared/servicios/auto-contol.service';
import { preguntasAutoCotrol } from 'src/app/shared/modelos/preguntasAutoCotrol';
import { PreguntasService } from 'src/app/shared/servicios/preguntas.service';
import { InicioService } from 'src/app/shared/servicios/inicio.service';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.sass']
})
export class PreguntasComponent implements OnInit , AfterViewInit {
  respuestas=[1,2,3,4,5];
  respuestasSelecionadas=[];
  public preguntas: preguntasAutoCotrol[];
  @ViewChild('contenido') contenidoDelModal;
  ngAfterViewInit() {
    window.scrollTo(0, 0);
    if(this.autoContolService.obtenerDatosPersonales()){
      this.open();
    }
    
  }
  constructor(private router: Router,private modalService: NgbModal, private preguntasAutocontrolSevice: PreguntasService , private autoContolService: AutoContolService, private inicioService:InicioService) { }

  ngOnInit(): void {
    this.inicioService.limpiarTodo();
    window.scrollTo(0, 0);
    this.preguntasAutocontrolSevice.consultarPreguntasAutocontrol().subscribe(data =>{
      this.preguntas = data;
      
    });
    if(!this.autoContolService.obtenerDatosPersonales()){
      this.router.navigate(['/inicio']);
    }
  }
  public open() {
    this.modalService.open(this.contenidoDelModal, { size: 'lg', centered: true })
  }
  /**
   *  METODO PARA LLENAR EL ARREGLO DE LAS RESPUESTAS
   * @param numero valor de la respuesta
   * @param orden el numero de la pregunta
   */
  agregar(numero: number, orden: number) {
    const respuestaCopia = {
      orden: orden,
      valor: numero
    }

    if (this.respuestasSelecionadas[orden - 1]) {
      this.respuestasSelecionadas.splice(orden - 1, 1, respuestaCopia);
      //this.respuestasCalculos.splice(orden - 1, 1, respuestaCopia.valor)
    } else {
      this.respuestasSelecionadas.push(respuestaCopia);
    }

  }
  /**
   * METODO PARA PINTAR LAS RESPUESTAS ELEGIDAS
   * @param numero 
   * @param orden 
   */
  public esRespuestaSeleccionado(numero: number, orden: number): boolean {

    return this.respuestasSelecionadas.some(posicion => posicion.valor === numero && posicion.orden === orden);
  }
  enviar(){
    this.autoContolService.agregarRespuestas(this.respuestasSelecionadas);
    this.autoContolService.enviar();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Haz completado el test con éxito',
      text: 'Gracias por diligenciar todas las respuestas ' ,
      confirmButtonColor: "#1fc41f",
      showConfirmButton: true,
      confirmButtonText: "Aceptar",
    })
    .then(() => {
      this.router.navigate(['/inicio']);
    });
    
  }
 
}
