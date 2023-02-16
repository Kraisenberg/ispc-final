import { Component, OnInit } from '@angular/core';
import { Iuser } from '../users/iuser';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrousuarioComponent implements OnInit {

  titulo: string = "Registro de administradores"

  user!: Iuser;

  constructor() { }

  ngOnInit(): void {
  }




}
