import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgramasService } from '../shared/servicios/programas.service';

import { InicioService } from '../shared/servicios/inicio.service';
import { MotivacionService } from '../shared/servicios/motivacion.service';
import { AutoContolService } from '../shared/servicios/auto-contol.service';
import { PersonalidadService } from '../shared/servicios/personalidad.service';
import { ProcastinacionService } from '../shared/servicios/procastinacion.service';

@Component({
  selector: 'app-datos-personal',
  templateUrl: './datos-personal.component.html',
  styleUrls: ['./datos-personal.component.sass']
})
export class DatosPersonalComponent implements OnInit {
  programas = [];
  habilitarTest:string;

  constructor(private router: Router, private personalidadService: PersonalidadService, private progrmasService: ProgramasService,private motivacioService:MotivacionService,private autoContolService:AutoContolService,private procastinacionService:ProcastinacionService, private inicioService:InicioService) { }

  ngOnInit(): void {
    this.personalidadService.limpiarTodo();
    this.autoContolService.limpiarTodo();
    this.motivacioService.limpiarTodo();
    this.procastinacionService.limpiarTodo();
    this.progrmasService.obtenerTodosProgramas().subscribe(data => {
      this.programas = data;
    });
    this.habilitarTest=this.inicioService.habilitarTest();
    if(!this.habilitarTest){
      this.router.navigate(['/inicio']);
    }
  }
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ]+ +[a-zA-ZáéíóúñÁÉÍÓÚÑ]+[ ?[a-zA-ZáéíóúñÁÉÍÓÚÑ]*]*$/)]),
    documento: new FormControl('', [Validators.required,Validators.pattern(/^[0-9a-zA-Z]* *$/),Validators.minLength(5),Validators.maxLength(20)]),
    genero: new FormControl('', Validators.required),
    programa: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if(this.form.valid){

    

    if(this.habilitarTest== 'testPersonalidad'){
    this.personalidadService.agregarDatosPersonales(this.form.value);
    this.router.navigate(['/cuestionario-personalidad']);
    }
     if (this.habilitarTest=='otro-test'){
      this.autoContolService.agregarDatosPersonales(this.form.value);
      this.router.navigate(['/cuestionario-autoeficacia']);
    }
     if (this.habilitarTest=='motivacion'){
      this.motivacioService.agregarDatosPersonales(this.form.value);
      this.router.navigate(['/cuestionario-motivacion']);
    }
    if (this.habilitarTest=='procastinacion'){
      this.procastinacionService.agregarDatosPersonales(this.form.value);
      this.router.navigate(['/cuestionario-procastinacion']);
    }
    
  }else {
    this.form.markAllAsTouched();
  }
}

}