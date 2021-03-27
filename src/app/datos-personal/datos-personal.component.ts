import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadoService } from '../shared/servicios/resultado.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgramasService } from '../shared/servicios/programas.service';

import { InicioService } from '../shared/servicios/inicio.service';
import { MotivacionService } from '../shared/servicios/motivacion.service';
import { AutoContolService } from '../shared/servicios/auto-contol.service';

@Component({
  selector: 'app-datos-personal',
  templateUrl: './datos-personal.component.html',
  styleUrls: ['./datos-personal.component.sass']
})
export class DatosPersonalComponent implements OnInit {
  programas = [];
  habilitarTest:string;

  constructor(private router: Router, private resultadoService: ResultadoService, private progrmasService: ProgramasService,private motivacioService:MotivacionService,private autoContolService:AutoContolService, private inicioService:InicioService) { }

  ngOnInit(): void {
    this.resultadoService.limpiarTodo();
    this.autoContolService.limpiarTodo();
    this.motivacioService.limpiarTodo();
    this.progrmasService.obtenerTodosProgramas().subscribe(data => {
      this.programas = data;
    });
    this.habilitarTest=this.inicioService.habilitarTest();
    if(!this.habilitarTest){
      this.router.navigate(['/inicio']);
    }
  }
  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    documento: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    programa: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
  

    if(this.habilitarTest== 'testPersonalidad'){
    this.resultadoService.agregarDatosPersonales(this.form.value);
    this.router.navigate(['/cuestionario']);
    }
     if (this.habilitarTest=='otro-test'){
      this.autoContolService.agregarDatosPersonales(this.form.value);
      this.router.navigate(['/cuestionario-otro']);
    }
     if (this.habilitarTest=='motivacion'){
      this.motivacioService.agregarDatosPersonales(this.form.value);
      this.router.navigate(['/cuestionario-motivacion']);
    }
    
  }

}