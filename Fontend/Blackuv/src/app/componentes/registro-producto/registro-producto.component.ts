import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/class/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  fotoseleccionada!: File;

  producto : Producto =  new Producto();

  constructor(private _service : ProductoService, private _router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.cargarProducto()
  }

  createProducto(){
    this._service.crearProducto(this.producto).subscribe(
      data => {
        console.log(data);    
        Swal.fire('Registro', `Producto ${data.nombre} registrado exitosamente` , 'success' )
        console.log("Responce recived");
        this._router.navigate(['/listaproductos']);
      },
      error => {
        console.log("Exception occured");
        alert("Credenciales incorrectas");  
      }
      );
  }

  actualizarProducto(){
    this._service.updateProducto(this.producto).subscribe()
    Swal.fire('Registro', `Producto ${this.producto.nombre} actualizado exitosamente` , 'success' )
    this._router.navigate(['/listaproductos']);
  }

  cargarProducto(){
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this._service.getProductoById(id).subscribe((prodcuto) => this.producto = prodcuto)
      }
    })
  }

  titulo(){
    if(this.producto.id){
      return "Actualizar Producto";
    }
    return "Registrar Producto";
  }

  seleccionarFoto(event: any){
    this.fotoseleccionada = event.target.files[0];
    console.log(this.fotoseleccionada);
    try{
      
    
      if(this.fotoseleccionada.type.indexOf('image') < 0){
        Swal.fire('Error seleccionar imagen: ', 'Debe seleccionar un archivo de tipo imagen', 'error');
        let aa : any = null
        this.fotoseleccionada = (aa) as File;
      }
    }catch{

    }
  }

  subirFoto(){

    if(!this.fotoseleccionada){
      Swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    }
    else{

      this._service.subirFoto(this.fotoseleccionada, this.producto.id).subscribe((producto: Producto) => {
        this.producto = producto;
        //this.producto.notificarUpload.emit(this.producto);
        Swal.fire('La foto se ha subido exitosamente!',`La foto: ${this.producto.foto}. se cargó correctamente `, 'success' );
      }
      );
    }
  }















}
