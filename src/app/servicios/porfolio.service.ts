import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { educacion } from '../modelos/educacion.modelo';
import { experiencia } from '../modelos/experiencia.modelo';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http: HttpClient) { }

 
  DatosPersona():Observable<any> {
    return this.http.get('http://localhost:8080/persona/lista');
  }

  //Componente educacion
  DatosEducacion():Observable<any> {    
    return this.http.get<any>('http://localhost:8080/educacion/lista');
}

GuardarEdu(educacion: educacion): Observable<any> {
  return this.http.post<any>('http://localhost:8080/educacion/new',educacion);
}

EditEducacion(id: number, educacion:educacion): Observable<any> {
  return this.http.put<any>('http://localhost:8080/educacion/editar/${id}',educacion);
}

BorrarEducacion(id: number): Observable<any> {
  return this.http.delete<any>('http://localhost:8080/educacion/borrar/${id}');
 }

 //componente experiencia
DatosExperiencia():Observable<any> {
  return this.http.get<any>('http://localhost:8080/experiencia/lista');
}
GuardarExp(experiencia:experiencia): Observable<any> {
  return this.http.post<any>('http://localhost:8080/experiencia/new',experiencia);
}

EditExperiencia(id: number, experiencia:experiencia): Observable<any> {
  return this.http.put<any>('http://localhost:8080/experiencia/editar/${id}',experiencia);
}

Borrarexperiencia(id: number): Observable<any> {
  return this.http.delete<any>('http://localhost:8080/experiencia/borrar/${id}');
 }

}



//aca podria implementar los metodos crear, borrar y editar para los componentes?
//public editarPersona(): Observable<Persona> {
  //return this.http.get<any>(this.URL+'editar/{id}'

//implementaremos las llamadas http para obtener los recursos del servidor
//interesandonos todos los datos del porfolio y haciendo la aplicacion dinamica
//constructor (http: HttpClient){}
//obtenerDatos():Onservable<any> {
  //return this.http.get("json") aca iria la URL del servidor
  //de esta manera podemos enlazarlo al componente
  //a travez de interpolacion {{miPorfolio.name}} o como este especificado en el JSON
  //las imagenes neecesitamos proppiting binding que permiten asignar valores a las propie4dades
  //de los elementos html o las dorectivas presentes en el documento
  //[src]="miPorfolio.imagen"
  //para el caso de las listas como por ejemplo en EXPERIENCIAS
  //angular ofrece las directivas, comandos que ofrece que pueden asignarse a cualquier etiqueta por medio de atributos
  //que permiten manipular el DOM
  //directivas de estructuras, ng for que permite recorrer cada uno de los elementos 
  //que tenemos en el array(JSON) y mostrar los datos.
  //primero inyectamos en el componente el servicio, creando una variable de tipo any
  //declaramos el metodo y asignamos el valor recibido a la variable
  //ahora si podemos recorrer <div *ngFor="let educacion of listaEducacion", solo dejamos un div
  //hacemos la interpolacion en los elementos
  //EXPLICACION EN MIN 40.