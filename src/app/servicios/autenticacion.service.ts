import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  authUrl = "https://back-porfolio-daiana.herokuapp.com/auth/login"
  currentUserSubject: BehaviorSubject<any>; 

  constructor(private http: HttpClient) {


    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));//inicializamos el objeto y lo instanciamos con lo que hay
    
  }

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.authUrl, credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get UsuarioAuth(): any {
    return this.currentUserSubject.value;
  }
  getToken() { 
    return sessionStorage.getItem('currentUser');
  }

}

