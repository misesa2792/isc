import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  tipo : any;
  icono;
  error;

  constructor(private router : Router) {
    this.tipo = 'password';
    this.icono = 'eye-off-outline';
    this.error;
  }

  ngOnInit() {
  }

  mostrarPassword(){
    this.tipo = (this.tipo == 'password' ? 'text' : 'password');
    this.icono = (this.icono == 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline');
  }

  iniciarSesion(user, password){
    if(user == 'isc' && password == '123456'){
      //Nevargar a la página home
      //this.router.navigateByUrl('/home');
      this.router.navigate(['/home', {user : user, password : password}]);
    }else{
      this.error = "Usuario Incorrecto";
    }
  }

}
