import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  exp: any = null;

  constructor(private datosPorfolio: PorfolioService, private ruta: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activateRoute.snapshot.params['id'];
    alert(id);
    this.datosPorfolio.DetalleExperiencia(id).subscribe(data => {
      this.exp = data;
    }, err => {
      alert("Error al actualizar")
    });
  }

  editExp(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.datosPorfolio.EditExperiencia(id, this.exp).subscribe(
      data => {
        this.exp = data;
        this.ruta.navigate(['']);
      }, err => {
        alert("Error al modificar")
      });
    
  }

}
