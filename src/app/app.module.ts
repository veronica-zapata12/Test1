import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasPersonalidadComponent } from './personalidad-componentes/preguntas/preguntas-personalidad/preguntas-personalidad.component';
import { ReportePersonalidadComponent } from './personalidad-componentes/reporte/reporte-personalidad/reporte-personalidad.component';
import { ResultadoPersonalidadComponent } from './personalidad-componentes/resultado/resultado-personalidad/resultado-personalidad.component';
import { DatosPersonalComponent } from './datos-personal/datos-personal.component';
import { InicioComponent } from './inicio/inicio.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PreguntasMotivacionComponent } from './preguntas-motivacion/preguntas/preguntas-motivacion/preguntas-motivacion.component';
import { ReporteMotivacionComponent } from './preguntas-motivacion/reporte/reporte-motivacion/reporte-motivacion.component';
import { PreguntasComponent } from './autoeficacia-componentes/preguntas/preguntas.component';
import { ReporteComponent } from './autoeficacia-componentes/reporte/reporte.component';
import { PreguntasProcastinacionComponent } from './procastinacion/preguntas-procastinacion/preguntas-procastinacion.component';
import { ReporteProcastinacionComponent } from './procastinacion/reporte-procastinacion/reporte-procastinacion.component';
import { ResultadoPersonalizadoComponent } from './personalidad-componentes/resultado-personalizado/resultado-personalizado.component';
import { ReportesComponent } from './reportes/reportes.component';
import { LoginComponent } from './login/login.component';
import { PreguntasInteresesProfesionalesComponent } from './intereses-profesionales-componentes/preguntas-intereses-profesionales/preguntas-intereses-profesionales.component';
import { ReporteInteresesProfesionalesComponent } from './intereses-profesionales-componentes/reporte-intereses-profesionales/reporte-intereses-profesionales.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalComponent,
    PreguntasPersonalidadComponent,
    ReportePersonalidadComponent,
    ResultadoPersonalidadComponent,
    InicioComponent,
    PreguntasComponent,
    ReporteComponent,
    PreguntasMotivacionComponent,
    ReporteMotivacionComponent,
    PreguntasProcastinacionComponent,
    ReporteProcastinacionComponent,
    ResultadoPersonalizadoComponent,
    ReportesComponent,
    LoginComponent,
    PreguntasInteresesProfesionalesComponent,
    ReporteInteresesProfesionalesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    NgbCarouselModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
