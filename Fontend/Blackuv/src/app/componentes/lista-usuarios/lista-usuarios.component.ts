import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: User[] = [];
  paginator: any;
  usuarioSeleccionado: User = new User(); 
  

  constructor(
    private regstrationservice: RegistrationService, 
    private activatedRoute: ActivatedRoute, 
    //private modalService :ModalService,
    public authservice: AuthService){ }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe( params =>
    {
      this.regstrationservice.getUsuarios().pipe(
        tap(response => {
          console.log('Usuariocomponent: tap 2');
          let arobj :any = response
          let userlist: User[] = (arobj) as User[]
          (userlist).forEach(usuario => {console.log(usuario.name); })
       })
     )
      .subscribe(
        response => {
          let arobj :any = response
          let userlist: User[] = (arobj) as User[]
          this.usuarios = userlist;
          //this.paginator = response;
        });
      })

    
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
    }).then((result : any) => {
      if (result.isConfirmed) {
        this.regstrationservice.deleteUsuario(user.id).subscribe(
          () => {
            this.usuarios = this.usuarios.filter(cli => cli !== user)
            Swal.fire('Eliminado!',`El usuario ${user.name} ${user.lastname} fué eliminado exitosamente.`,'success')})
      }
    })
  }








}
