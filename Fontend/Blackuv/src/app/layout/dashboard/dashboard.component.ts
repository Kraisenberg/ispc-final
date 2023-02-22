import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/class/factura';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/auth.service';
import { FacturaService } from 'src/app/services/factura.service';
import { RegistrationService } from 'src/app/services/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user!: User ;

  constructor(
    public authservice : AuthService,
    private _service : RegistrationService,
    private facturaService : FacturaService,
     
    ) { }

  ngOnInit(): void {

    this.cargarUsuario();
   
  }

  cargarUsuario(){
    let idd: unknown =  Number(this.authservice.getIdSession());
    let id : number = Number(idd)
    this._service.getUsuario(id).subscribe((user) => this.user = user)
  
  }

  delete(factura: Factura):void{

    Swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar la factura ${factura.descripcion}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Elimínala',
      cancelButtonText: 'No de momento'
    }).then((result : any) => {
      if (result.isConfirmed) {
        this.facturaService.deleteFactura(factura.id).subscribe(
          () => {
            this.user.facturas = this.user.facturas.filter(fac => fac !== factura)
            Swal.fire('Eliminado!',`La factura ${factura.descripcion} fué eliminada exitosamente.`,'success')})
      }
    })

  }

}
