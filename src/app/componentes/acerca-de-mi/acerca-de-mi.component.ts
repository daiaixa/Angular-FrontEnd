import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css'],
  providers: [],
})
export class AcercaDeMiComponent implements OnInit {

  datosPersonas:any;

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

      this.datosPorfolio.DatosPersona().subscribe(data => {
        console.log(data);
        this.datosPersonas = data;
      });

    }


  }
