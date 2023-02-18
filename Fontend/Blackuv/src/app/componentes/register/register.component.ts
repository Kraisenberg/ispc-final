import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User =  new User();

  constructor(private _service : RegistrationService, private _router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.cargarUsuario()
  }

  createUser(){
    this._service.registerFromRemote(this.user).subscribe(
      data => {
        console.log(data);    
        //camibiar por un sweet alert
        console.log("Responce recived");
        this._router.navigate(['/listausuarios']);
      },
      error => {
        console.log("Exception occured");
        alert("Credenciales incorrectas");  
      }
      );
  }

  actualizarUsuario(){
    this._service.updateUsuario(this.user).subscribe()
    this._router.navigate(['/listausuarios']);
  }

  cargarUsuario(){
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this._service.getUsuario(id).subscribe((user) => this.user = user)
      }
    })
  }

}


