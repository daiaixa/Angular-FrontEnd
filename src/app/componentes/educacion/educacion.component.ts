import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  datosEducacion: any;

  isLogged = false;



  //el interceptor es el que intercepta antes de la llamada para agregar en el encabezado del msj el token
  constructor(private datosPorfolio: PorfolioService,
    private authService: AutenticacionService,
    private ruta: Router) { }



  ngOnInit(): void {
    //aca va el if
    if (this.authService.getToken() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }

this.cargarListaEdu();

  }

  cargarListaEdu(): void {
    this.datosPorfolio.DatosEducacion().subscribe(data => {
      this.datosEducacion = data;
    });
  }

  borrar(id: number) {
    this.datosPorfolio.BorrarEducacion(id).subscribe(data => {
      alert("La educacion ha sido eliminada");
  }),
  this.cargarListaEdu;
  this.ruta.navigate(['']); //al eliminarlos no recarga la lista ni funciona con navigate
}
} 