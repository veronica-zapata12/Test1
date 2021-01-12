import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultadoService } from '../servicios/resultado.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesGuard implements CanActivate {
  constructor(private resultadoService: ResultadoService, private router: Router) { }


  canActivate(): boolean {
    let permitido = false;

    if (this.resultadoService.obtenerDatosPersonales()) {
      permitido = true;
    } else if (environment.guardActivo) {
      this.router.navigate(['']);
    }
    return environment.guardActivo ? permitido : true;
  }

  
}
