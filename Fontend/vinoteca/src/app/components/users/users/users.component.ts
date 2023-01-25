import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserserviceService } from './userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: User[] = []

  constructor(private usuarioservice: UserserviceService) { }

  ngOnInit(): void {
    this.usuarioservice.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  eliminarUsuario(user: User): void{
    
    Swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar el usuario ${user.name} ${user.lastname}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Elimínalo',
      cancelButtonText: 'No de momento'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioservice.deleteUsuario(user.id).subscribe(
          () => {
            this.usuarios = this.usuarios.filter(cli => cli !== user)
            Swal.fire('Eliminado!',`El usuario ${user.name} ${user.lastname} fué eliminado exitosamente.`,'success')})
      }
    })
  }





















}
