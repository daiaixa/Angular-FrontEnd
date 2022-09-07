import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  datosExperiencia: any;//creo la variable para guardar la data que recibe en DatosExperiencia

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.DatosExperiencia().subscribe(data => {
      this.datosExperiencia = data;
      console.log(this.datosExperiencia);//a modo de ver que lleguen los objetos
    });

  }


}
