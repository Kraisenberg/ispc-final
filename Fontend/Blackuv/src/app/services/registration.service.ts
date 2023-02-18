import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import {HttpClient } from "@angular/common/http"
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  arobj: any;
  userlist : User[] = [] || undefined;



  private url: string = "http://localhost:8081/blackuva/users/"

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    
    return this._http.post<any>( this.url + 'loginuser', user);

  }

  public registerFromRemote(user: User): Observable<any>{

    return this._http.post<any>( this.url + 'registeruser', user);
  }

  getUsuarios(): Observable<any> {
    return this._http.get<User[]>(this.url)
  
  }

  getUsuario(id: number): Observable<User>{
    return this._http.get<User>(`${this.url}${id}`).pipe(
      catchError(e =>{ 
        if(e.status != 401 && e.error.mensaje){
          //this.router.navigate(['/usuarios'])
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
    return this._http.put<User>(`${this.url}/${user.id}`,user).pipe(
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
