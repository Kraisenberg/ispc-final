import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../users/users/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
   
    constructor(private authService: AuthService, private router: Router ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      

       return next.handle(req).pipe(
        catchError(e => {
            if (e.status == 401 ){
                if(this.authService.isAuthenticated()){       
                  this.authService.logout();
                }
                this.router.navigate(['/login'])
                
              }
              if (e.status == 403){
                sweetAlert('Acceso denegado', 'Necesitas permisos adicionales para acceder a este recurso!' , 'warning');
                this.router.navigate(['/usuarios'])              
              }
              return throwError(e);          
        })
       );
        
    } 


}  