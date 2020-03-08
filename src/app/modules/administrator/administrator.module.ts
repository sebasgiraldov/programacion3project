import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AddAsesorComponent } from './add-asesor/add-asesor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { TipoInmComponent } from './tipo-inm/tipo-inm.component';
import { CiudadesDeptosComponent } from './ciudades-deptos/ciudades-deptos.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearCiudadComponent } from './crear-ciudad/crear-ciudad.component';
import { CrearTipoComponent } from './crear-tipo/crear-tipo.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';

@NgModule({
  declarations: [AddAsesorComponent, TipoInmComponent, CiudadesDeptosComponent, InicioComponent, CrearCiudadComponent, CrearTipoComponent, ListaSolicitudesComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
  ]
})
export class AdministratorModule { }
