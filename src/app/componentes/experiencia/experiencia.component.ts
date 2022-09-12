import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  datosExperiencia: any;//creo la variable para guardar la data que recibe en DatosExperiencia
  isLogged = false;

  constructor(private datosPorfolio: PorfolioService, private authService: AutenticacionService,
    private ruta: Router) { }

  ngOnInit(): void {

    if (this.authService.getToken() === null){ 
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }

    this.datosPorfolio.DatosExperiencia().subscribe(data => {
      this.datosExperiencia = data;
      console.log(this.datosExperiencia);//a modo de ver que lleguen los objetos
    });


  }

 borrar(id: number) {
      this.datosPorfolio.Borrarexperiencia(id).subscribe(data => {
        alert("La educacion ha sido eliminada");
    }),
    this.ruta.navigate(['']); //al eliminarlos no recarga la lista ni funciona con navigate
  }
}
