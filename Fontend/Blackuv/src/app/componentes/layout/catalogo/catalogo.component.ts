import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
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

  contador: number[] = [1 ,2,3,4,5,6,7]
  
  constructor(
    public authservice: AuthService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.getProductos();

  }


  eliminarProducto(producto: Producto){
    Swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar el producto ${producto.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Elimínalo',
      cancelButtonText: 'No de momento'
    }).then((result : any) => {
      if (result.isConfirmed) {
        this.productoService.deleteProducto(producto.id).subscribe(
          () => {
            this.productos = this.productos.filter(cli => cli !== producto)
            Swal.fire('Eliminado!',`El usuario ${producto.nombre} fué eliminado exitosamente.`,'success')})
      }
    })
  }

  getProductos(){

    this.activatedRoute.paramMap.subscribe( params =>
      {
        this.productoService.getProductos().pipe(
          tap(response => {
            console.log('Usuariocomponent: tap 2');
            let arobj :any = response
            let userlist: Producto[] = (arobj) as Producto[]
            (userlist).forEach(producto => {console.log(producto.nombre); })
         })
       )
        .subscribe(
          response => {
            let arobj :any = response
            let userlist: Producto[] = (arobj) as Producto[]
            this.productos = userlist;
            //this.paginator = response;
          });
        })



  }

















}
