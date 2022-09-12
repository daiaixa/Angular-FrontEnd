import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PorfolioService } from './servicios/porfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { EditarEduComponent } from './componentes/educacion/editar-edu.component';
import { CrearEduComponent } from './componentes/educacion/crear-edu.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp.component';
import { CrearExpComponent } from './componentes/experiencia/crear-exp.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PresentacionComponent,
    AcercaDeMiComponent,
    HabilidadesComponent,
    EducacionComponent,
    ExperienciaComponent,
    InicioSesionComponent,
    PorfolioComponent,
    EditarEduComponent,
    CrearEduComponent,
    EditarExpComponent,
    CrearExpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PorfolioService,
  {provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
