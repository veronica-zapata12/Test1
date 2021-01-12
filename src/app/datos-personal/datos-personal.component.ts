import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadoService } from '../shared/servicios/resultado.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgramasService } from '../shared/servicios/programas.service';
import { OtroTestService } from '../shared/servicios/otro-test.service';
import { InicioService } from '../shared/servicios/inicio.service';

@Component({
  selector: 'app-datos-personal',
  templateUrl: './datos-personal.component.html',
  styleUrls: ['./datos-personal.component.sass']
})
export class DatosPersonalComponent implements OnInit {
  programas = [];
  habilitarTest:boolean;

  constructor(private router: Router, private resultadoService: ResultadoService, private progrmasService: ProgramasService,private otroTestService:OtroTestService, private inicioService:InicioService) { }

  ngOnInit(): void {
    this.resultadoService.limpiarTodo();
    this.otroTestService.limpiarTodo();
    this.progrmasService.obtenerTodosProgramas().subscribe(data => {
      this.programas = data;
    });
    this.habilitarTest=this.inicioService.habilitarTest();
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
    console.log(this.form.value);

    if(this.habilitarTest){
    this.resultadoService.agregarDatosPersonales(this.form.value);
    this.router.navigate(['/cuestionario']);
    }else{
      this.otroTestService.agregarDatosPersonales(this.form.value);
      this.router.navigate(['/cuestionario-otro']);
    }
    
  }

}