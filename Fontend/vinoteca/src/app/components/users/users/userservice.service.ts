import { Injectable } from '@angular/core';
import { User } from './user';
import { map, tap } from 'rxjs';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Region } from './region';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private url:string = 'http://localhost:8081/api/clientes';
 
  constructor(private http: HttpClient, private router: Router ) { }

  getUsuarios(page: number): Observable<any> {
    //aca tenemos que devolver un objeto user sin enbargo httpClient nos manda un obserbable la siguiente linea lo transforma en un objeto User
    return this.http.get<User[]>(this.url + '/page/' + page).pipe(
      tap((response: any) =>{
        console.log('Userservice: tap 1');
        (response.content as User[]).forEach(usuario =>{
          console.log(usuario.name);    
        })
      }),  

      map(response => {      
          (response.content as User[]).map(usuario => {
            usuario.name = usuario.name.toUpperCase();
            return usuario;
          });
          return response;
        })
    );
  }

  //Metodo para crar un nuevo usuario
  create(user: User): Observable<User>{
    return this.http.post<User>(this.url, user).pipe(
    catchError(e => {

      if(e.status == 400){
        return throwError(e)
      }
      if(e.mensaje){
      console.error(e.error.mensaje);
      }  
      return throwError(e);
      })
    );
  }

  getUsuario(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`).pipe(
      catchError(e =>{ 
        if(e.status != 401 && e.error.mensaje){
          this.router.navigate(['/usuarios'])
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );

  }

  updateUsuario(user: User): Observable<User>{
    return this.http.put<User>(`${this.url}/${user.id}`,user).pipe(
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

  deleteUsuario(id: number): Observable<User>{
    return this.http.delete<User>(`${this.url}/${id}`).pipe(
      catchError(e => {
        if(e.mensaje){
          console.error(e.error.mensaje);
          }  
        return throwError(e);
        })
    )
  }

  subirFoto(archivo: File, id: any): Observable<User> {
    let formtData = new FormData();
    formtData.append("archivo", archivo);
    formtData.append("id", id);

    return this.http.post(`${this.url}/upload/`, formtData) 
    .pipe(      
      map((response: any) => response.usuario as User),
    );
  }

  getRegiones(): Observable<Region[]>{
   return this.http.get<Region[]>(this.url + '/regiones' );
  }




}
