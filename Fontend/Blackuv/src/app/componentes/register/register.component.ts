import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User =  new User();

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  createUser(){

    this._service.registerFromRemote(this.user).subscribe(
      data => {
        console.log(data);    
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


