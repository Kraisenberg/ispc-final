import { Injectable } from '@angular/core';
import { User } from './user';
//import { USUARIOS } from './usuarios.json';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private url:string = 'http://localhost:8081/api/users';
 ;
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  private isNoAutorizado(e : any):boolean {
    if (e.status == 401 || e.status == 403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }

  getUsuarios(): Observable<User[]> {
    //aca tenemos que devolver un objeto user sin enbargo httpClient nos manda un obserbable la siguiente linea lo transforma en un objeto User
    return this.http.get<User[]>(this.url);
    //tambien se puede hacer con el operador map que viene de rxjs
    // return this.http.get(this.url).pipe(map( response => response as => User[]))
  }

  //Metodo para crar un nuevo usuario
  create(user: User): Observable<User>{
    return this.http.post<User>(this.url, user, {headers: this.httpHeaders} )
  }

  getUsuario(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }

  updateUsuario(user: User): Observable<User>{
    return this.http.put<User>(`${this.url}/${user.id}`,user, {headers: this.httpHeaders})
  }

  deleteUsuario(id: number): Observable<User>{
    return this.http.delete<User>(`${this.url}/${id}`,{headers: this.httpHeaders})
  }



}
