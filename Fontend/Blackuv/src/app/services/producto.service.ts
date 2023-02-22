import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Producto } from '../class/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  arobj: any;
  userlist : Producto[] = [] || undefined;

  private url: string = "http://localhost:8081/blackuva/facturas/productos"

  constructor(private _http : HttpClient, private router: Router ) { }


  public crearProducto(prodcuto: Producto): Observable<any>{

    return this._http.post<any>( this.url , prodcuto);
  }

  getProductos(): Observable<any> {

    return this._http.get<Producto[]>(this.url)
    
  }

  getProductoById(id: number): Observable<Producto>{
    return this._http.get<Producto>(`${this.url}/${id}`).pipe(
      catchError(e =>{ 
        if(e.status != 401 && e.error.mensaje){
          this.router.navigate(['/listaproductos'])
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );

  }
  deleteProducto(id: number): Observable<Producto>{
    return this._http.delete<Producto>(`${this.url}/${id}`).pipe(
      catchError(e => {
        if(e.mensaje){
          console.error(e.error.mensaje);
          }  
        return throwError(e);
        })
    )
  }

  updateProducto(producto: Producto): Observable<Producto>{
    return this._http.put<Producto>(`${this.url}/${producto.id}`,producto).pipe(
      catchError(e => {
        if(e.status == 400){
          return throwError(e)
        }
        if(e.mensaje){
          console.error(e.error.mensaje);
        }   
        return throwError(e);
        })

    )
  }









































}
