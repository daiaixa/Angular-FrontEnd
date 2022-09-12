import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { educacion } from 'src/app/modelos/educacion.modelo';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-crear-edu',
  templateUrl: './crear-edu.component.html',
  styleUrls: ['./crear-edu.component.css']
})
export class CrearEduComponent implements OnInit {
  establecimiento = "";
  curso = "";
  descripcion = "";
  fecha_inicio = "";
  fecha_fin = "";


  constructor(private datosPorfolio: PorfolioService, private ruta: Router) { }

  ngOnInit(): void { }

  create(): void {
    const edu = new educacion(this.establecimiento, this.curso, this.descripcion,
      this.fecha_inicio, this.fecha_fin);
    this.datosPorfolio.GuardarEdu(edu).subscribe(data => {
      alert("educacion creada correctamente");
      this.ruta.navigate(['']);
    }, err => {
      alert("Falló la carga");
      this.ruta.navigate(['']);
    }
    )
  }
}
