import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private registrationService: RegistrationService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.registrationService.getToken();

    if(token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}` )
      })
      return next.handle(cloned);
    }else{
      Swal.fire('Acceso denegado', 'Debes autenticarte para acceder a este recurso ' , 'error')
      this.router.navigate(['/login'])
    }

    return next.handle(request);
  }
}
