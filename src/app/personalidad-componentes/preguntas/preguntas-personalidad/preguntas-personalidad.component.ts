import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Preguntas } from 'src/app/shared/modelos/preguntas';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PreguntasService } from 'src/app/shared/servicios/preguntas.service';
import { CalculosService } from 'src/app/shared/servicios/calculos.service';
import { TablaMujeresService } from 'src/app/shared/servicios/tabla-mujeres.service';
import { TablaHombresService } from 'src/app/shared/servicios/tabla-hombres.service';
import { InicioService } from 'src/app/shared/servicios/inicio.service';
import { PersonalidadService } from 'src/app/shared/servicios/personalidad.service';

@Component({
  selector: 'app-preguntas-personalidad',
  templateUrl: './preguntas-personalidad.component.html',
  styleUrls: ['./preguntas-personalidad.component.sass']
})
export class PreguntasPersonalidadComponent implements OnInit, AfterViewInit {
  @ViewChild('content') contenidoDelModal;
  ngAfterViewInit() {
    window.scrollTo(0, 0);
    if(this.personalidadService.obtenerDatosPersonales()){
      this.open();
    }
  }
  public generoUsuario: string;
  /* ARREGLOS PARA LAS PREGUNTAS, RESPUESTAS, PD Y PE */
  public preguntas: Preguntas[];
  respuestas = [];
  respuestasCalculos:number[] = [];
  paginaActual = 1;
  PD:number[]= [];
  PE:number[] = [];
  /* ESTAS SON LAS VARIABLES PARA CALCULAR EL PD*/
  AparaPd: number;
  BparaPd: number;
  CparaPd: number;
  EparaPd: number;
  FparaPd: number;
  GparaPd: number;
  HparaPd: number;
  IparaPd: number;
  LparaPd: number;
  MparaPd: number;
  NparaPd: number;
  OparaPd: number;
  Q1paraPd: number;
  Q2paraPd: number;
  Q3paraPd: number;
  Q4paraPd: number;
  MIparaPd: number;
  INparaPd: number;
  QAparaPd: number;


  constructor(private router: Router, private config: NgbModalConfig, private modalService: NgbModal,
    private preguntasService: PreguntasService, private personalidadService: PersonalidadService,
    private calculoService: CalculosService, public tablaMujeresService: TablaMujeresService,
    public tablaHombresService: TablaHombresService,private inicioService:InicioService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit() {
    this.inicioService.limpiarTodo();
    window.scrollTo(0, 0);
    this.preguntasService.consultarPreguntasPersonalidad().subscribe(data => {
      this.preguntas = data;
    });
    if(!this.personalidadService.obtenerDatosPersonales()){
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

    if (this.respuestas[orden - 1]) {
      this.respuestas.splice(orden - 1, 1, respuestaCopia);
      this.respuestasCalculos.splice(orden - 1, 1, respuestaCopia.valor)

    } else {
      this.respuestas.push(respuestaCopia);
      this.respuestasCalculos.push(respuestaCopia.valor);

    }
//para que haga scroll hacia abajo cuando se habiliten las opciones del paginador o el boton de enviar
    if(this.respuestas.length===20|| this.respuestas.length === 40 || this.respuestas.length === 60 || this.respuestas.length === 80 || this.respuestas.length === 100 || this.respuestas.length === 120 || this.respuestas.length === 140 || this.respuestas.length === 160 || this.respuestas.length === 180 || this.respuestas.length===185){
      window.scrollTo(0, 40000);
    }

  }
  /**
   * METODO PARA PINTAR LAS RESPUESTAS ELEGIDAS
   * @param numero 
   * @param orden 
   */
  public esRespuestaSeleccionado(numero: number, orden: number): boolean {

    return this.respuestas.some(posicion => posicion.valor === numero && posicion.orden === orden);
  }

  enviar() {
    this.personalidadService.agregarRespuestas(this.respuestas);
    
    /*
    CALCULA LAS VARIABLES A,B,C.... PARA EL PD
   */
    this.AparaPd = this.calculoService.calcularAenPd(this.respuestasCalculos);
    this.BparaPd = this.calculoService.calcularBenPd(this.respuestasCalculos);
    this.CparaPd = this.calculoService.calcularCenPd(this.respuestasCalculos);
    this.EparaPd = this.calculoService.calcularEenPd(this.respuestasCalculos);
    this.FparaPd = this.calculoService.calcularFenPd(this.respuestasCalculos);
    this.GparaPd = this.calculoService.calcularGenPd(this.respuestasCalculos);
    this.HparaPd = this.calculoService.calcularHenPd(this.respuestasCalculos);
    this.IparaPd = this.calculoService.calcularIenPd(this.respuestasCalculos);
    this.LparaPd = this.calculoService.calcularLenPd(this.respuestasCalculos);
    this.MparaPd = this.calculoService.calcularMenPd(this.respuestasCalculos);
    this.NparaPd = this.calculoService.calcularNenPd(this.respuestasCalculos);
    this.OparaPd = this.calculoService.calcularOenPd(this.respuestasCalculos);
    this.Q1paraPd = this.calculoService.calcularQ1enPd(this.respuestasCalculos);
    this.Q2paraPd = this.calculoService.calcularQ2enPd(this.respuestasCalculos);
    this.Q3paraPd = this.calculoService.calcularQ3enPd(this.respuestasCalculos);
    this.Q4paraPd = this.calculoService.calcularQ4enPd(this.respuestasCalculos);
    this.MIparaPd = this.calculoService.calcularMIenPd(this.respuestasCalculos);
    this.INparaPd = this.calculoService.calcularINenPd(this.respuestasCalculos);
    this.QAparaPd = this.calculoService.calcularQAenPd(this.respuestasCalculos);
    /*
     AGREGA LAS VARIABLES A,B,C.... YA CALCULADAS PARA EL PD*/
    this.PD.push(this.AparaPd, this.BparaPd, this.CparaPd, this.EparaPd, this.FparaPd, this.GparaPd, this.HparaPd, this.IparaPd, this.LparaPd,
      this.MparaPd, this.NparaPd, this.OparaPd, this.Q1paraPd, this.Q2paraPd, this.Q3paraPd, this.Q4paraPd, this.MIparaPd, this.INparaPd, this.QAparaPd)

      /* calculos de PE dependiendo del genero*/
    if (this.personalidadService.obtenerDatosPersonales().genero === "M") {

      this.PE.push(this.tablaHombresService.calcularA(this.AparaPd));
      this.PE.push(this.tablaHombresService.calcularB(this.BparaPd));
      this.PE.push(this.tablaHombresService.calcularC(this.CparaPd));
      this.PE.push(this.tablaHombresService.calcularE(this.EparaPd));
      this.PE.push(this.tablaHombresService.calcularF(this.FparaPd));
      this.PE.push(this.tablaHombresService.calcularG(this.GparaPd));
      this.PE.push(this.tablaHombresService.calcularH(this.HparaPd));
      this.PE.push(this.tablaHombresService.calcularI(this.IparaPd));
      this.PE.push(this.tablaHombresService.calcularL(this.LparaPd));
      this.PE.push(this.tablaHombresService.calcularM(this.MparaPd));
      this.PE.push(this.tablaHombresService.calcularN(this.NparaPd));
      this.PE.push(this.tablaHombresService.calcularO(this.OparaPd));
      this.PE.push(this.tablaHombresService.calcularQ1(this.Q1paraPd));
      this.PE.push(this.tablaHombresService.calcularQ2(this.Q2paraPd));
      this.PE.push(this.tablaHombresService.calcularQ3(this.Q3paraPd));
      this.PE.push(this.tablaHombresService.calcularQ4(this.Q4paraPd));
      this.PE.push(this.tablaHombresService.calcularMI(this.MIparaPd));
      this.PE.push(this.tablaHombresService.calcularIN(this.INparaPd));
      this.PE.push(this.tablaHombresService.calcularQA(this.QAparaPd));
      
    } else {
      this.PE.push(this.tablaMujeresService.calcularA(this.AparaPd));
      this.PE.push(this.tablaMujeresService.calcularB(this.BparaPd));
      this.PE.push(this.tablaMujeresService.calcularC(this.CparaPd));
      this.PE.push(this.tablaMujeresService.calcularE(this.EparaPd));
      this.PE.push(this.tablaMujeresService.calcularF(this.FparaPd));
      this.PE.push(this.tablaMujeresService.calcularG(this.GparaPd));
      this.PE.push(this.tablaMujeresService.calcularH(this.HparaPd));
      this.PE.push(this.tablaMujeresService.calcularI(this.IparaPd));
      this.PE.push(this.tablaMujeresService.calcularL(this.LparaPd));
      this.PE.push(this.tablaMujeresService.calcularM(this.MparaPd));
      this.PE.push(this.tablaMujeresService.calcularN(this.NparaPd));
      this.PE.push(this.tablaMujeresService.calcularO(this.OparaPd));
      this.PE.push(this.tablaMujeresService.calcularQ1(this.Q1paraPd));
      this.PE.push(this.tablaMujeresService.calcularQ2(this.Q2paraPd));
      this.PE.push(this.tablaMujeresService.calcularQ3(this.Q3paraPd));
      this.PE.push(this.tablaMujeresService.calcularQ4(this.Q4paraPd));
      this.PE.push(this.tablaMujeresService.calcularMI(this.MIparaPd));
      this.PE.push(this.tablaMujeresService.calcularIN(this.INparaPd));
      this.PE.push(this.tablaMujeresService.calcularQA(this.QAparaPd));
    }

    /**
     * METODOS PARA LLEVAR A AGUARDAR LOS DATOS 
     */
    this.personalidadService.agregarPD(this.PD);
    this.personalidadService.agregarPE(this.PE)
    this.personalidadService.enviar();
    this.router.navigate(['/resultado']);
  }
  
}

