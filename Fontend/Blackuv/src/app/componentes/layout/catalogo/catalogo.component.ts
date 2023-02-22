import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Factura } from 'src/app/class/factura';
import { ItemFactura } from 'src/app/class/item-factura';
import { Producto } from 'src/app/class/producto';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: Producto[] = []

  carrito: ItemFactura[] = []

  factura: Factura =  new Factura();

  //productoSelec: Producto;

  constructor(
    public authservice: AuthService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.getProductos();

  }

  ngOnChanges():void{

  }

  getProductos(){

    this.activatedRoute.paramMap.subscribe( params =>
      {
        this.productoService.getProductos().subscribe(
          response => {
            let arobj :any = response
            let userlist: Producto[] = (arobj) as Producto[]
            this.productos = userlist;
            //this.paginator = response;
          });
        })

  }

  agregarCarrito(producto: Producto): void{

    let itm =  new ItemFactura();
    itm.producto = producto;
    itm.importe = producto.precio 
    this.carrito.push(itm);
    console.log("agregui algoaa" + itm);
    
    
  }
















}
