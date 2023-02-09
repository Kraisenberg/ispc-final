import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { User } from '../users/user';
import { UserserviceService } from '../users/userservice.service';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
 
  titulo: String = 'Detalle del usuario';
 
  @Input() user: User;
 
 fotoseleccionada!: File;

  constructor( private userservice: UserserviceService, public modalService: ModalService, public authService: AuthService) { }

  ngOnInit(): void {
    
    console.log('usuario recibido por imput');
    console.log(this.user);
    
  }

  seleccionarFoto(event: any){
    this.fotoseleccionada = event.target.files[0];
    console.log(this.fotoseleccionada);
    if(this.fotoseleccionada.type.indexOf('image') < 0){
      sweetAlert('Error seleccionar imagen: ', 'Debe seleccionar un archivo de tipo imagen', 'error');
      this.fotoseleccionada = null
    }
  }

  subirFoto(){

    if(!this.fotoseleccionada){
      sweetAlert('Error Upload: ', 'Debe seleccionar una foto', 'error');
    }
    else{

      this.userservice.subirFoto(this.fotoseleccionada, this.user.id).subscribe(usuario => {
        this.user = usuario;
        this.modalService.notificarUpload.emit(this.user);
        sweetAlert('La foto se ha subido exitosamente!',`La foto: ${this.user.foto}. se cargó correctamente `, 'success' );
      }
      );
    }
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoseleccionada = null;
  }


}
