import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreguntasPersonalidadComponent } from './personalidad-componentes/preguntas/preguntas-personalidad/preguntas-personalidad.component';
import { ResultadoPersonalidadComponent } from './personalidad-componentes/resultado/resultado-personalidad/resultado-personalidad.component';
import { ReportePersonalidadComponent } from './personalidad-componentes/reporte/reporte-personalidad/reporte-personalidad.component';
import { DatosPersonalComponent } from './datos-personal/datos-personal.component';
import { InicioComponent } from './inicio/inicio.component';
import { PreguntasMotivacionComponent } from './preguntas-motivacion/preguntas/preguntas-motivacion/preguntas-motivacion.component';
import { ReporteMotivacionComponent } from './preguntas-motivacion/reporte/reporte-motivacion/reporte-motivacion.component';
import { ReporteComponent } from './autoeficacia-componentes/reporte/reporte.component';
import { PreguntasComponent } from './autoeficacia-componentes/preguntas/preguntas.component';



const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'datospersonales',
    component: DatosPersonalComponent
  },
  {
    path: 'cuestionario-personalidad',
    component: PreguntasPersonalidadComponent
  },
  {
    path: 'resultado',
    component: ResultadoPersonalidadComponent
  },
  {
    path: 'reporte-personalidad',
    component: ReportePersonalidadComponent
  },
  {
    path: 'reporte-autoYefi',
    component:ReporteComponent
  },
  {
    path: 'reporte-moti',
    component:ReporteMotivacionComponent
  },
  {
    path:'cuestionario-autoeficacia',
    component:PreguntasComponent

  },
  {
    path:'cuestionario-motivacion',
    component:PreguntasMotivacionComponent

  },
 
  {
    path:'',
    redirectTo: 'inicio', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
