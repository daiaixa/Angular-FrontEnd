import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/modelos/experiencia.modelo';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-crear-exp',
  templateUrl: './crear-exp.component.html',
  styleUrls: ['./crear-exp.component.css']
})
export class CrearExpComponent implements OnInit {

  categoria = "";
  puesto = "";
  descripcion = "";
  referencia = "";
  tel_refe = "";
  fecha_inicio = "";
  fecha_fin = "";

  constructor(private datosPorfolio: PorfolioService, private ruta: Router) { }

  ngOnInit(): void {    }

  crearExp(): void { 
    const exp = new experiencia (this.categoria, this.puesto, this.descripcion,
      this.referencia, this.tel_refe, this.fecha_inicio, this.fecha_fin)
      this.datosPorfolio.GuardarExp(exp).subscribe(data => {
        alert("La experiencia fue creada correctamente");
        this.ruta.navigate(['']);
      }, err => { 
        console.log("Fallo la carga");
        this.ruta.navigate(['']);
      });
  }
}
