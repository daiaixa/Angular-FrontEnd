import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../modelos/educacion.modelo';
import { experiencia } from '../modelos/experiencia.modelo';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http: HttpClient) { }


  DatosPersona(): Observable<any> {
    return this.http.get('https://back-porfolio-daiana.herokuapp.com/persona/lista');
  }

  //Componente educacion
  DatosEducacion(): Observable<any> {
    return this.http.get<any>('https://back-porfolio-daiana.herokuapp.com/educacion/lista');
  }

  GuardarEdu(educacion: educacion): Observable<any> {
    return this.http.post<any>('https://back-porfolio-daiana.herokuapp.com/educacion/new', educacion);
  }// si no necesitamos enviar nada en el RequestBody agregarmos {} 

  EditEducacion(id: number, educacion: educacion): Observable<any> {
    return this.http.put<any>(`https://back-porfolio-daiana.herokuapp.com/educacion/editar/${id}`, educacion);
  }

  BorrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(`https://back-porfolio-daiana.herokuapp.com/educacion/borrar/${id}`);  
  }

  DetalleEducacion(id: number): Observable<any>{
    return this.http.get<any>(`https://back-porfolio-daiana.herokuapp.com/educacion/detail/${id}`);
  }

  //componente experiencia
  DatosExperiencia(): Observable<any> {
    return this.http.get<any>('https://back-porfolio-daiana.herokuapp.com/experiencia/lista');
  }
  GuardarExp(experiencia: experiencia): Observable<any> {
    return this.http.post<any>('https://back-porfolio-daiana.herokuapp.com/experiencia/new', experiencia);
  }

  EditExperiencia(id: number, experiencia: experiencia): Observable<any> {
    return this.http.put<any>(`https://back-porfolio-daiana.herokuapp.com/experiencia/editar/${id}`, experiencia);
  }

  Borrarexperiencia(id: number): Observable<any> {
    return this.http.delete<any>(`https://back-porfolio-daiana.herokuapp.com/experiencia/borrar/${id}`);
  }
  
  DetalleExperiencia(id: number): Observable<any>{
    return this.http.get<any>(`https://back-porfolio-daiana.herokuapp.com/experiencia/detail/${id}`);
  }


}
