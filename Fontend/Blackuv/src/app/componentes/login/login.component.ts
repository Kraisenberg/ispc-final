import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials, User } from 'src/app/class/user';
import { RegistrationService } from 'src/app/services/registration.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user : User = new User();
  creds: Credentials = {
    email: '' ,
    password: ''
  }
  
  userTemp : User = new User()

  constructor(private _service : RegistrationService, private _router : Router) {}

  ngOnInit(): void {
  }

  loginUser(){
    
    console.log('form value' , this.creds);
    
    this._service.loginUserFromRemote(this.creds).subscribe(
      
      data => {  

        this._service.getUsuario(Number(localStorage.getItem('userId'))).subscribe(

            usuario =>{

              sessionStorage.setItem("name", usuario.name);
              sessionStorage.setItem("role", usuario.role);
              sessionStorage.setItem("id", String(usuario.id));
            }
        
          )
     
        Swal.fire('Inicio de Sesion', 'Bienvenidio ' , 'success');
        console.log("Responce recived");
        this._router.navigate(['/catalogo']);
      },
      
      error => {
        console.log("Exception occured");
        Swal.fire('Error', 'Credenciales incorrectas', 'error');  
      }      
    );
  }
}


