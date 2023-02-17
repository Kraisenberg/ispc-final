import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { RegistrationService } from 'src/app/services/registration.service';

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
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("role", data.role);
        //camibiar por un sweet alert
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
