import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioI } from '../shared/modelos/usuario';
import { LoginService } from '../shared/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public isError = false;
 
  loginForm=new FormGroup({
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  })
  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  Onlogin(form:UsuarioI){
    this.loginService.loginByEmail(form)
      .then(() =>{
        
        this.router.navigate(['/reportes']);

      })
      .catch(()=>this.isError=true);
      
  }
}
