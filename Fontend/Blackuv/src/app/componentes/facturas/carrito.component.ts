import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/class/factura';
import { ItemFactura } from 'src/app/class/item-factura';
import { Producto } from 'src/app/class/producto';
import { AuthService } from 'src/app/services/auth.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { FacturaService } from 'src/app/services/factura.service';
import { RegistrationService } from 'src/app/services/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  factura: Factura = new Factura();

  constructor(
    public carritoService: CarritoService,
    private service : RegistrationService,
    private facturaService : FacturaService,
    private router: Router,
    //private activatedRoute: ActivatedRoute,
    public authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.service.getUsuario(Number(sessionStorage.getItem("id"))).subscribe(
      (usuario) => {this.factura.user = usuario }
    );
    console.log("inicio");
    this.anadirItemFactura() ;   
  }

  ngOnChanges(simpleChanges :SimpleChanges):void{
    this.anadirItemFactura() 
  }


  anadirItemFactura():void{
    this.factura.items = this.carritoService.carrito
    console.log("añadir item factura");
    
    console.log(this.carritoService.carrito)
  }

  actualizarCantidad(id: number, event : any): void{
    let cantidad: number = Number(event.target.value);
    if(cantidad == 0){
      this.eliminarItemFactura(id);
    }
    
      this.factura.items = this.factura.items.map( (item):ItemFactura =>{
        if(id === item.producto.id){
          item.cantidad = cantidad;
        }
        return item;
     })
     this.anadirItemFactura()
  }

  existeItem(id:number) :boolean{
    let existe = false
    this.factura.items.forEach( (item : ItemFactura) =>{
      if(id === item.producto.id){
        existe = true
      }
    })
    return existe;
  }

  incrementarCantidad(id:number) :void{
    this.carritoService.incrementarCantidad(id);
  }

  eliminarItemFactura(id: number):void{
    this.carritoService.eliminarItemFactura(id)
    this.anadirItemFactura() ;
    
  }

  createFactura(){
    this.facturaService.createFactura(this.factura).subscribe(
      (factura: Factura) =>{
        Swal.fire('Factura',`Factura ${this.factura.descripcion} creada exitosamente`, 'success')
        this
        this.router.navigate(['/dashboard'])
      }     
    )
  }


}
