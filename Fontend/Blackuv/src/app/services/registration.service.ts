import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import {HttpClient, HttpResponse } from "@angular/common/http"
import { Credentials, User } from '../class/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  arobj: any;
  userlist : User[] = [] || undefined;

  private url: string = "http://localhost:8081/blackuva/users/"

  constructor(private _http : HttpClient, private router: Router ) { }

  public loginUserFromRemote(creds: Credentials ):Observable<any>{
    
    var nam = this._http.post("http://localhost:8081/login", creds, {
      observe: 'response' 
    })
      .pipe(map((response: HttpResponse<any>) => {
      
        console.log('respuesta back' , response.headers.get('Authorization'));
        
        const body = response.body;
        const headers = response.headers;

        const bearerToken = headers.get('Authorization')!;
        const token: string = bearerToken.replace('Bearer ', '');
        
        localStorage.setItem('token', token);
        
        const userid: string = headers.get('User')!;
        localStorage.setItem('userId', userid);
        
        return body;

      }));
  
    console.log(nam); 
    
    return nam;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  public registerFromRemote(user: User): Observable<any>{    
    console.log(user);   
    return this._http.post<any>( this.url + 'registeruser', user);   
  }

  getUsuarios(): Observable<any> {
    return this._http.get<User[]>(this.url)
  }

  getUsuario(id: number): Observable<User>{
    return this._http.get<User>(`${this.url}${id}`).pipe(
      catchError(e =>{ 
        if(e.status != 401 && e.error.mensaje){
          this.router.navigate(['/listausuarios'])
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );

  }
  deleteUsuario(id: number): Observable<User>{
    return this._http.delete<User>(`${this.url}${id}`).pipe(
      catchError(e => {
        if(e.mensaje){
          console.error(e.error.mensaje);
          }  
        return throwError(e);
        })
    )
  }

  updateUsuario(user: User): Observable<User>{
    return this._http.put<User>(`${this.url}${user.id}`,user).pipe(
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
