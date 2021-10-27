import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasInteresesProfesionales } from 'src/app/shared/modelos/preguntasInteresesProfesionales';
import { InicioService } from 'src/app/shared/servicios/inicio.service';
import { InteresesProfesionalesService } from 'src/app/shared/servicios/intereses-profesionales.service';
import { PreguntasService } from 'src/app/shared/servicios/preguntas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntas-intereses-profesionales',
  templateUrl: './preguntas-intereses-profesionales.component.html',
  styleUrls: ['./preguntas-intereses-profesionales.component.sass']
})
export class PreguntasInteresesProfesionalesComponent implements OnInit {

  respuestas=[1,2,3];
  respuestasSelecionadas=[];
  paginaActual = 1;
  preguntas: PreguntasInteresesProfesionales[];
  @ViewChild('contenido') contenidoDelModal;
  ngAfterViewInit() {
    window.scrollTo(0, 0);
    if(this.interesesProfesionalesService.obtenerDatosPersonales()){
      this.open();
    }
    
  }
  constructor(private router: Router,private modalService: NgbModal, private preguntasInteresesSevice: PreguntasService , private interesesProfesionalesService: InteresesProfesionalesService, private inicioService:InicioService) { }

  ngOnInit(): void {
    this.inicioService.limpiarTodo();
    window.scrollTo(0, 0);
    this.preguntasInteresesSevice.consultarPreguntasInteresesProfesionales().subscribe(data =>{
      this.preguntas = data;
      
    });
    if(!this.interesesProfesionalesService.obtenerDatosPersonales()){
      this.router.navigate(['/inicio']);
    }
  }
  public open() {
    this.modalService.open(this.contenidoDelModal, { size: 'lg', centered: true })
  }
  iniciar() {
    window.scrollTo(0, 200);
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
    } else {
      this.respuestasSelecionadas.push(respuestaCopia);
    }
   //para que haga scroll hacia abajo cuando se habiliten las opciones del paginador o el boton de enviar
   if(this.respuestasSelecionadas.length===35 ||this.respuestasSelecionadas.length===71){
    window.scrollTo(0, 40000);
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
    this.interesesProfesionalesService.agregarRespuestas(this.respuestasSelecionadas);
    this.interesesProfesionalesService.enviar();
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
