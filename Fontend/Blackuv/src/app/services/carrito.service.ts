import { Injectable } from '@angular/core';
import { ItemFactura } from '../class/item-factura';
import { Producto } from '../class/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: ItemFactura[] = []

  constructor() { }


  agregarCarrito(producto: Producto): void{

    if(this.existeItem(producto.id)){
      this.incrementarCantidad(producto.id);
    }
    else{
      let itm =  new ItemFactura();
      itm.producto = producto;
      itm.importe = producto.precio 
      this.carrito.push(itm);
    } 
    console.log(this.carrito);
    
  }

  existeItem(id:number) :boolean{
    let existe = false
    this.carrito.forEach( (item : ItemFactura) =>{
      if(id === item.producto.id){
        existe = true
      }
    })
    console.log(existe);
    return existe;
  }

  incrementarCantidad(id:number) :void{
    
    this.carrito.forEach( (item : ItemFactura) =>{
      if(id === item.producto.id){
        ++item.cantidad
      }
    console.log(item);
    return item;
    })
  }

  eliminarItemFactura(id: number):void{
      
    this.carrito = this.carrito.filter( (item: ItemFactura) => id !== item.producto.id )      
  }

  vaciarCarrito(): void{
    this.carrito= [];
  }

}
