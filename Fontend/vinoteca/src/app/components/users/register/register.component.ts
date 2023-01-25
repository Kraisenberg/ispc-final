import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { User , LoginUser } from '../users/user';
import { UserserviceService } from '../users/userservice.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user : User = new User();
  public ulogin : LoginUser = new LoginUser();
  public titulo: string = "Registrarse"

  constructor(
    private userService: UserserviceService,  
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
      this.cargarUsuario();
  }

  //Este metodo cargará un usuario si le pasamos un id
  cargarUsuario(): void{
    this.activatedRoute.params.subscribe(params => { 
      let id = params['id']
        if(id){
          this.userService.getUsuario(id).subscribe( (user) => this.user = user)
        }
      }
    )
  }

  //Metodo para crear un nuevo usuario (LLama al servicio)
  create(): void{
    this.userService.create(this.user).subscribe( usuario => { this.router.navigate(['/usuarios'])
    swal('Nuevo Usuario ', `Usuario ${this.user.name} creado exitosamente`, 'success') 
    })
  }

  actualizarUsuario(): void{
    this.userService.updateUsuario(this.user).subscribe( usuario => { this.router.navigate(['/usuarios'])
    swal('Usuario Actualizado', `Usuario ${this.user.name} actualizado exitosamente`, 'success')
     })
  }
 

}


