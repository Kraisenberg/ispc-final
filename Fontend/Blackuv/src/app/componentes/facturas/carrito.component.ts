import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from 'src/app/class/factura';
import { ItemFactura } from 'src/app/class/item-factura';
import { Producto } from 'src/app/class/producto';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  
  @Input() itemFactura!: ItemFactura[]

  @Input() productoSelec! : Producto

  factura: Factura = new Factura();

  constructor(
    private service : RegistrationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.getUsuario(Number(sessionStorage.getItem("id"))).subscribe(
      (usuario) => {this.factura.user = usuario }
    );
    console.log("inicio");
    this.anadirItemFactura() ;   
  }
  ngOnChanges(changes: any):void{

    if(changes.inputValue){
      this.anadirItemFactura(); 
      console.log("on cambios");
      
    }
    
  }


  seleccionarProducto(){
    let nuevoItem = new ItemFactura();
  
  }

  anadirItemFactura():void{
    this.factura.items = this.itemFactura
    console.log("añadir item factura");
    
    console.log(this.itemFactura)
  }

  actualizarCantidad(id: number, event : any): void{
    let cantidad: number = Number(event.target.value);
    this.factura.items = this.factura.items.map( (item):ItemFactura =>{
      if(id === item.producto.id){
        item.cantidad = cantidad;
      }
      return item;
    })
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
    this.factura.items = this.factura.items.map( (item):ItemFactura =>{
      if(id === item.producto.id){
        ++item.cantidad
      }
      return item;
    })
  }

}
