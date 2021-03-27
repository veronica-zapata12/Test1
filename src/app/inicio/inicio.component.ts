import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadoService } from '../shared/servicios/resultado.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { InicioService } from '../shared/servicios/inicio.service';
import { AutoContolService } from '../shared/servicios/auto-contol.service';
import { MotivacionService } from '../shared/servicios/motivacion.service';

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
  constructor(private router: Router,private inicioService:InicioService, private resultadoService:ResultadoService, private autocotrolService:AutoContolService, private motivacionService:MotivacionService,private modalService: NgbModal, private config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
  
  ngOnInit(): void {
    this.inicioService.limpiarTodo();
    this.resultadoService.limpiarTodo();
    this.autocotrolService.limpiarTodo();
    this.motivacionService.limpiarTodo();



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
