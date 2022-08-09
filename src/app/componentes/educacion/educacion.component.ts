import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  datosEducacion:any;
  
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.DatosEducacion().subscribe(data => {
      this.datosEducacion = data;
      console.log(this.datosEducacion);
    });
  }
}
