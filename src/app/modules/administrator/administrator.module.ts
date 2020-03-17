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
import { EditEmailComponent } from './edit-email/edit-email.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { GraficaInmueblesComponent } from './grafica-inmuebles/grafica-inmuebles.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AddAsesorComponent, TipoInmComponent, CiudadesDeptosComponent, InicioComponent, CrearCiudadComponent, CrearTipoComponent, ListaSolicitudesComponent, EditEmailComponent, ListClientesComponent, GraficaInmueblesComponent, GraficasComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    ChartsModule
  ]
})
export class AdministratorModule { }
