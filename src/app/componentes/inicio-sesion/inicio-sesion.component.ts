import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  form: FormGroup;

  constructor(
    //private tokenService: TokenService,
    private authService: AutenticacionService,
    private FormBuilder: FormBuilder,
    private ruta: Router) {
    //inicializamos form
    this.form = this.FormBuilder.group(
      {  //como espera los datos la API
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        })
      }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//escribimos dos propiedades para obtener el email y la contraseña
    get Email() {
      return this.form.get('email');
    }
   
     get Password() {
       return this.form.get('password');
    }

    inicioSesion(event:Event) {//recibir un evento para poder llamar el metodo preventDefault
      try { event.preventDefault;//este metodo cancelará el curso normal del formulario
      this.authService.IniciarSesion(this.form.value).subscribe(data => {
        console.log("DATA"+JSON.stringify(data));
        this.ruta.navigate(['/perfil']);
      })}
      catch (Error) { console.log("error en el metodo");}
    }
  }