import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { InicioService } from '../shared/servicios/inicio.service';
import { AutoContolService } from '../shared/servicios/auto-contol.service';
import { MotivacionService } from '../shared/servicios/motivacion.service';
import { PersonalidadService } from '../shared/servicios/personalidad.service';
import { ProcastinacionService } from '../shared/servicios/procastinacion.service';
import { InteresesProfesionalesService } from '../shared/servicios/intereses-profesionales.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit , AfterViewInit {
  @ViewChild('content') contenidoDelModal;
  ngAfterViewInit() {
    window.scrollTo(0,0);
    this.abrirModal();
  }
  habilitarContenido:boolean;
  constructor(private router: Router,private inicioService:InicioService, private personalidadService:PersonalidadService, private autocotrolService:AutoContolService,
     private motivacionService:MotivacionService,private procastinacionService:ProcastinacionService,private modalService: NgbModal, private config: NgbModalConfig,
     private interesesProfesionalesService:InteresesProfesionalesService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
  
  ngOnInit(): void {
    this.inicioService.limpiarTodo();
    this.personalidadService.limpiarTodo();
    this.autocotrolService.limpiarTodo();
    this.motivacionService.limpiarTodo();
    this.procastinacionService.limpiarTodo();
    this.interesesProfesionalesService.limpiarTodo();



  }
  public nomostrarContenido(){
    this.habilitarContenido=false;

  }
  public mostrarContenido(){
    this.habilitarContenido=true;

  }
  public abrirModal() {
    this.modalService.open(this.contenidoDelModal, { size: 'lg', centered: true })
  }
  
public elegirTest(testNombre:string){
  this.inicioService.escogerTest(testNombre);
  this.router.navigate(['/datospersonales']);

}

}
