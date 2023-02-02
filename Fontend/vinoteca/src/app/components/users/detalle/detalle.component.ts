import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UserserviceService } from '../users/userservice.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  user: User = new User;
  titulo: String = 'Detalle del cliente';

  private fotoseleccionada: File;

  constructor( private userservice: UserserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe( params =>{
      let id: number = +params.get('id');
      if(id){
        this.userservice.getUsuario(id).subscribe(user =>{
          this.user = user;
        });
      }
    });
  }

  seleccionarFoto(event: any){
    this.fotoseleccionada = event.target.files[0];
    console.log(this.fotoseleccionada);
  }

  subirFoto(){
    this.userservice.subirFoto(this.fotoseleccionada, this.user.id).subscribe(usuario => {
      this.user = usuario;
      sweetAlert('La foto se ha subido exitosamente!',`La foto: ${this.user.foto}. se cargó correctamente `, 'success' );
    }

    );
  }

}
