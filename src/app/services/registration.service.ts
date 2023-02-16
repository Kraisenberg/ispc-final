import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from "@angular/common/http"
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url: string = "http://localhost:8081/blackuva/"

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    
    return this._http.post<any>( this.url + 'loginuser', user);
  }

  public registerFromRemote(user: User): Observable<any>{

    return this._http.post<any>( this.url + 'registeruser', user);

  }



}
