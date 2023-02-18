import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { RegistrationService } from 'src/app/services/registration.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User = new User();

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("role", data.role);
        sessionStorage.setItem( "id", data.id);
        Swal.fire('Inicio de Sesion', 'Bienvenidio '+ data.name );
        console.log("Responce recived");
        this._router.navigate(['']);
      },
      error => {
        console.log("Exception occured");
        alert("Credenciales incorrectas");  
      }
      );
  }


}


