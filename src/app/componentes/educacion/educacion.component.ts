import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { InterceptorService } from 'src/app/servicios/interceptor.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  datosEducacion:any;
    isLogged = false;
       //el interceptor es el que intercepta antes de la llamada para agregar en el encabezado del msj el token
  constructor(private datosPorfolio: PorfolioService, private interceptor:InterceptorService,
    private authService: AutenticacionService) { }



  ngOnInit(): void {
    const currentUser=this.authService.UsuarioAuth;

    if(currentUser.accessToken) { 
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.datosPorfolio.DatosEducacion().subscribe(data => {
      this.datosEducacion = data;
      console.log(this.datosEducacion);//a modo de observar que llegan los objetos
    });

  }
}
