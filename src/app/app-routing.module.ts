import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { GuardGuard } from './servicios/guard.guard';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';

const routes: Routes = [
  {path:'perfil',component:PorfolioComponent},
  {path:'perfil/inicio',component:PorfolioComponent},
  {path:'login', component:InicioSesionComponent},
  {path:'perfil/acerca-de', component: AcercaDeMiComponent},
  {path:'perfil/habilidades', component:HabilidadesComponent},
  {path:'perfil/educacion', component:EducacionComponent},
  {path:'perfil/experiencia', component:ExperienciaComponent},
  {path: '', redirectTo: 'perfil', pathMatch:'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
