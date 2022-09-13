import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  datosExperiencia: any;
  isLogged = false;

  constructor(private datosPorfolio: PorfolioService, private authService: AutenticacionService,
    private ruta: Router,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    if (this.authService.getToken() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }

    this.datosPorfolio.DatosExperiencia().subscribe(data => {
      this.datosExperiencia = data;
    });


  }

  borrar(id: number) { //no logré que se recargara el elemento luego de eliminado
    this.datosPorfolio.Borrarexperiencia(id).subscribe(data => { 
      alert("La educacion ha sido eliminada");
    }); this.cd.detectChanges();
    this.ruta.navigate
  }
}
