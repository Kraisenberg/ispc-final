import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _iusuario: Iuser | undefined;
  private _token: string | undefined;

  constructor(private http: HttpClient) { }

  public get iusuario(): Iuser {
    
    if(this._iusuario != null){
      return this._iusuario;
    } else if(this._iusuario == null && sessionStorage.getItem('usuario') != null){
    
      this._iusuario = JSON.parse(sessionStorage.getItem('usuario')) as Iuser;
      return this._iusuario
    }
    return new Iuser();
  }

  public get token(): string {
    
    if(this._token != null){
      return this._token;
    } else if(this._token == null && sessionStorage.getItem('token') != null){
    
      this._token = sessionStorage.getItem('token');
      return this._token
    }
    return null;
  }

  

  login(iuser: Iuser): Observable<any> {
    const urlEndpoint = 'http://localhost:8081/oauth/token';
  
    const credenciales = btoa('angularapp' + ':' + '12345');
  
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + credenciales});
  
    let params = new URLSearchParams();
    
    params.set('grant_type','password');
    params.set('username', iuser.username);
    params.set('password', iuser.password);
    
    console.log(params.toString());
    
    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
  }

  guardarIusuario(accessToken: string): void{
    let payload = this.obtenerDatosToken(accessToken);  
    this._iusuario = new Iuser();
    this._iusuario.username = payload.user_name;
    this._iusuario.roles = payload.authorities;
    sessionStorage.setItem('usuario', JSON.stringify(this._iusuario))

  }
  guardarToken(accessToken: string): void{
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: string): any{
    if(accessToken != null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated(): boolean{
    let payload = this.obtenerDatosToken(this.token)
    if(payload != null && payload.user_name && payload.user_name.length > 0 ){
      return true
    }
    return false
  
  }
  
  logout(): void{
    this._token = null;
    this._iusuario = null;
    sessionStorage.clear(); 
  }

  hasRole(role: string){
    if(this.iusuario.roles.includes(role)){
      return true;
    }
    return false;
  }

}

