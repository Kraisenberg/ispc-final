import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../users/auth.service';
import { Iuser } from '../users/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: String = "Iniciar Sesión"
  iuser: Iuser ;

  constructor(private authService: AuthService, private router: Router ) {
    this.iuser = new Iuser();
   }

  ngOnInit(): void {
      if(this.authService.isAuthenticated()){
        sweetAlert('Inicio de Seccion', `Hola ${this.authService.iusuario.username}, ya estas autenticado!` , 'info')
        this.router.navigate(['/usuarios']);
      }
  }

  login():void{
    console.log(this.iuser);
    if(this.iuser.username == null || this.iuser.password == null){
      sweetAlert('Error inicio Sesión', 'Usuario o Contraseña vacios', 'error');
    }

    this.authService.login(this.iuser).subscribe(response => {
      console.log(response);

      let payload = JSON.parse(atob(response.access_token.split(".")[1]));
      console.log(payload);
      
      this.authService.guardarIusuario(response.access_token);
      this.authService.guardarToken(response.access_token)

      let usuario = this.authService.iusuario;


      this.router.navigate(['/usuarios']);
      sweetAlert('Inicio de Seccion', `Hola ${usuario.username}, has iniciado sesíon correctamente!` , 'success')
      
    }, err => {
      if(err.status == 400){
        sweetAlert('Error Inicio Sesion', "Usuario o clave incorrectos" , 'error')
      }
    }
    );
  }
  



}
