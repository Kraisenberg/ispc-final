import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../users/users/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  logout(): void{
    let username0 = this.authService.iusuario.username;
    sweetAlert('Cierre de Sesión',`Esperamos verte de nuevo ${username0}!`,'success');
    this.authService.logout(); 
    this.router.navigate(['/login']);
  
  } 


  ngOnInit(): void {
  }

}
