import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    
    let auth = sessionStorage.getItem("name")
    if((auth != null) ){
      return true;
    }
    return false;

  }

  getuserInSession(): string{
    let usu:string = (sessionStorage.getItem("name")) as string;
    return usu;
  }
    
  isAdmin(): Boolean{
    if(sessionStorage.getItem("role") === 'ROLE_ADMIN'){
      return true;
    }
    return false;
  }

  getIdSession():string{
    let usu:string = (sessionStorage.getItem("id")) as string;
    return usu;
  }



}

  
