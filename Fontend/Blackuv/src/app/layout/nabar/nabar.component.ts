import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nabar',
  templateUrl: './nabar.component.html',
  styleUrls: ['./nabar.component.css']
})
export class NabarComponent implements OnInit {

  constructor( 
    public authservice : AuthService,
    public carritoService: CarritoService,
    private router : Router  ) { }

  ngOnInit(): void {
    
  }

  ngOnchnges(){
    this.isAuthenticated()
  }

  isAuthenticated():boolean
  {
    return this.authservice.isAuthenticated();
  }

  logout(){
    Swal.fire('Cerrar Sesión', 'Cierre de session exitoso', 'success');
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate([''])
  }

}


