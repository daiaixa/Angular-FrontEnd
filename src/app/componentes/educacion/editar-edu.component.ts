import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/modelos/educacion.modelo';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css']
})
export class EditarEduComponent implements OnInit {

  edu: any = null;

  constructor(private datosPorfolio: PorfolioService,
    private ruta: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.datosPorfolio.DetalleEducacion(id).subscribe(data => { 
      this.edu= data;
    }, err => {
      alert("error al actualizar")
    });
    
  }

   editEdu(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.datosPorfolio.EditEducacion(id, this.edu).subscribe(
      data => {
        this.edu = data;
      }, err => {
        alert("Error al modificar");    
      });
    this.ruta.navigate(['']);
  } 
}
