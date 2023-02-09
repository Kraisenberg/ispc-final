import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserserviceService } from './userservice.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../detalle/modal.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: User[] = [];
  paginator: any;
  usuarioSeleccionado: User = null; 
  

  constructor(
    private usuarioservice: UserserviceService, 
    private activatedRoute: ActivatedRoute, 
    private modalService :ModalService,
    public authservice: AuthService){ }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe( params =>
 
    {
      let page: number = +params.get('page');

      if(!page){
        page = 0
      }

      this.usuarioservice.getUsuarios(page).pipe(
        tap(response => {
          console.log('Usuariocomponent: tap 2');
          (response.content as User[]).forEach(usuario => {console.log(usuario.name); })
       })
     )
      .subscribe(
        response => {
          this.usuarios = response.content as User[];
          this.paginator = response;
        });
      })
  
      this.modalService.notificarUpload.subscribe(usuario =>{
        this.usuarios = this.usuarios.map(usuarioOriginal =>{
          if(usuario.id == usuarioOriginal.id){
            usuarioOriginal.foto = usuario.foto;
          } 
          return usuarioOriginal;
        })
      });




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

  abrirModal(usuario: User){
 
    this.usuarioSeleccionado = usuario;
    this.modalService.abrirModal();

  }













  





}
