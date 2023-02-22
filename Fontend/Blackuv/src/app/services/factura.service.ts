import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../class/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private url: string = "http://localhost:8081/blackuva/facturas/"

  
  constructor(private _http : HttpClient) { 

  }

  getFactura(id:number): Observable<Factura> {
    return this._http.get<Factura>(this.url + id);
  }

  deleteFactura(id:number): Observable<void>{
    return this._http.delete<void>(this.url + id);
  }
  

}
