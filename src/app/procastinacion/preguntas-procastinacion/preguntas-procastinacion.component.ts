import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasProcastinacion } from 'src/app/shared/modelos/preguntasProcastinacion';
import { InicioService } from 'src/app/shared/servicios/inicio.service';
import { PreguntasService } from 'src/app/shared/servicios/preguntas.service';
import { ProcastinacionService } from 'src/app/shared/servicios/procastinacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntas-procastinacion',
  templateUrl: './preguntas-procastinacion.component.html',
  styleUrls: ['./preguntas-procastinacion.component.sass']
})
export class PreguntasProcastinacionComponent implements OnInit , AfterViewInit {
  respuestas=[1,2,3,4,5];
  respuestasSelecionadas=[];
  paginaActual = 1;
  public preguntas: PreguntasProcastinacion[];
  @ViewChild('contenido') contenidoDelModal;
  ngAfterViewInit() {
    window.scrollTo(0, 0);
    if(this.procastinacionSevice.obtenerDatosPersonales()){
      this.open();
    }
    
  }
  constructor(private router: Router,private modalService: NgbModal, private preguntasProcastinacionSevice: PreguntasService, private procastinacionSevice: ProcastinacionService, private inicioService:InicioService) { }

  ngOnInit(): void {
    this.inicioService.limpiarTodo();
    window.scrollTo(0, 0);
    this.preguntasProcastinacionSevice.consultarPreguntasProcastinacion().subscribe(data =>{
      this.preguntas = data;
      
    });
    if(!this.procastinacionSevice.obtenerDatosPersonales()){
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
    this.procastinacionSevice.agregarRespuestas(this.respuestasSelecionadas);
    this.procastinacionSevice.enviar();
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

