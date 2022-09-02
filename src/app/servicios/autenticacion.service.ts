import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  authUrl = "http://localhost:8080/auth/login"
  currentUserSubject: BehaviorSubject<any>; //objeto donde especificaremos nuestro observable BehaviorSubject
  constructor(private http: HttpClient) {
    console.log("el serrvicio de autenticación esta funcionando");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));//inicializamos el objeto y lo instanciamos con lo que hay
    // almacenamos en el sessionStorage //el storage es un objeto que nos permiete almacenar los datos en forma local
    //posee dos propiedades, el localStorage (almacena en forma indefinida o hasta que se decida limpiar los daros del navegador)
    //el sesionStorage los almacena hasta que se cierra la ventana
  }

  //crearemos el metodo de iniciar sesión con la masterClass
  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.authUrl, credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get UsuarioAuth() {
    return this.currentUserSubject.value;
  }
}

