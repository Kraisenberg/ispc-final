import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';
import { Region } from '../users/region';
import { User } from '../users/user';
import { UserserviceService } from '../users/userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user : User = new User();
  public regiones: Region[] = []; 


  public titulo: string = "Registrarse"

  public errores: string[] = [];

  constructor(
    private userService: UserserviceService,  
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.cargarUsuario();  
    this.cargarRegiones();

  }
  cargarRegiones(){
    this.userService.getRegiones().subscribe(regiones => this.regiones= regiones);

  }

  cargarUsuario(): void{
    this.activatedRoute.params.subscribe(params => { 
      let id = params['id']
        if(id){
          this.userService.getUsuario(id).subscribe( (user) => this.user = user);
        }
      }
    )
  }

  //Metodo para crear un nuevo usuario (LLama al servicio)
  create(): void{
    this.userService.create(this.user).subscribe( 
      usuario =>{ 
        this.router.navigate(['/usuarios']);
        swal('Nuevo Usuario ', `Usuario ${this.user.name} creado exitosamente`, 'success');
      },
      err =>{ 
        this.errores = err.error.errors as string[];
        console.error('Codigo del error desde el backend ' + err.status);
        console.error(err.error.errors);     
      }
    );
  }

  actualizarUsuario(): void{
    this.userService.updateUsuario(this.user).subscribe(
       usuario => { 
        this.router.navigate(['/usuarios']);
        swal('Usuario Actualizado', `Usuario ${this.user.name} actualizado exitosamente`, 'success');
     },
     err =>{ 
       this.errores = err.error.errors as string[];
       console.error('Codigo del error desde el backend ' + err.status);
       console.error(err.error.errors);     
     })
  }
 
  compararRegion(o1: Region , o2: Region): boolean {

    if(o1 === undefined && o2 === undefined){ return true;}

    return o1 == null || o2 == null? false: o1.id === o2.id;
  }

}


