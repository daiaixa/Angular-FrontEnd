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
import { ReactiveFormsModule } from '@angular/forms';
import { PorfolioService } from './servicios/porfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { RegistroComponent } from './componentes/inicio-sesion/registro.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { CrearrExperienciaComponent } from './componentes/crearr-experiencia/crearr-experiencia.component';



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
    RegistroComponent,
    EditarExperienciaComponent,
    CrearrExperienciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [PorfolioService,
  {provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
