import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  public classMenu = true;
  isLogged = false;
  
  
  constructor(private authService : AutenticacionService, private ruta: Router) { }



  ngOnInit(): void { 
    if (this.authService.getToken() === null){ 
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
  
  mostarMenu(): void {
    this.classMenu = !this.classMenu
  }
  cerrarSession(): void { 
    sessionStorage.clear();
  }

  
}



  //miPorfolio:any; definimos una variable del tipo "any"=cualquier cosa
  //para asignarla al valor obtenido

 //this.datosPorfolio.obtenerDatos();
    //this.datosPorfolio.obtenerDatos.suscribe(data =>{   cuando obtenga la data, que haga
      //console.log(data)
      //this.miPorfolio=data;
    //})
//data binding: permite insertar y actualizar valores de manera sencilla

