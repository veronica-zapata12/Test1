import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/servicios/login.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.sass']
})
export class ReportesComponent implements OnInit {
  isLogged:boolean=false;
  constructor(private router: Router, private loginService:LoginService) { }
 
  ngOnInit(): void {
    this.getLogin();
    setTimeout(()=>{
      this.logout()
    },7200000);
  }

  getLogin(){
    this.loginService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
        this.router.navigate(['login'])
      }
    });
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['login'])
  }


}
