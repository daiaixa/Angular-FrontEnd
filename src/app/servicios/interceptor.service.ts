import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {



  constructor(private authService: AutenticacionService) { }

 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser=this.authService.UsuarioAuth;

    if (currentUser && currentUser.Token){
      req=req.clone({
        setHeaders: {
          Authorization: 'Bearer $(currentUser.Token}'
        }
      })
    }

    //este funciona !!
   
    console.log("Interceptor funcionando correctamente " + JSON.stringify(currentUser));    
    return next.handle(req);



  }
}
