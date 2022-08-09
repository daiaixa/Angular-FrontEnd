import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css'],
  providers: [],
})
export class AcercaDeMiComponent implements OnInit {

  public datosPersonas: Array<any> = [];

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.DatosPersona().subscribe(data => {
      this.datosPersonas = data;
      console.log(this.datosPersonas);   
    });
  }

}
