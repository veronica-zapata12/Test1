import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultadoService } from '../servicios/resultado.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespuestasGuard implements CanActivate {
  constructor(private resultadoService: ResultadoService, private router: Router) { }

  canActivate(): boolean {
    let permitido = false;
    const respuestas = this.resultadoService.onbtenerRespuestas();
    if (respuestas && respuestas.length === 185) {
      permitido = true;
    } else if (environment.guardActivo) {
      this.router.navigate(['/cuestionario']);
    }
    return environment.guardActivo ? permitido : true;
  }
  
}
