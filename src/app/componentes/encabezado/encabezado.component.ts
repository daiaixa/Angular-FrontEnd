import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  constructor(private datosPorfolio: PorfolioService) { }//inyectamos el servicio

  public classMenu: boolean = true;

  ngOnInit(): void {

   this.datosPorfolio.obtenerDatos()
    
   
  }
  mostarMenu(): void {
    this.classMenu = !this.classMenu
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

