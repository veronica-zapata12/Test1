import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosPersonalesGuard } from './shared/guardias/datos-personales.guard';
import { RespuestasGuard } from './shared/guardias/respuestas.guard';
import { PreguntasPersonalidadComponent } from './personalidad-componentes/preguntas/preguntas-personalidad/preguntas-personalidad.component';
import { ResultadoPersonalidadComponent } from './personalidad-componentes/resultado/resultado-personalidad/resultado-personalidad.component';
import { ReportePersonalidadComponent } from './personalidad-componentes/reporte/reporte-personalidad/reporte-personalidad.component';
import { DatosPersonalComponent } from './datos-personal/datos-personal.component';
import { InicioComponent } from './inicio/inicio.component';
import { PreguntasComponent } from './otro-test/preguntas/preguntas.component';
import { ReporteComponent } from './otro-test/reporte/reporte.component';



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
    path: 'cuestionario',
    component: PreguntasPersonalidadComponent
  },
  {
    path: 'resultado',
    component: ResultadoPersonalidadComponent
  },
  {
    path: 'reporte',
    component: ReportePersonalidadComponent
  },
  {
    path: 'reporte-otro',
    component:ReporteComponent
  },
  {
    path:'cuestionario-otro',
    component:PreguntasComponent

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
