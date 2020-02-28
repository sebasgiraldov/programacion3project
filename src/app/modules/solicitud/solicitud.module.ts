import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudInicioComponent } from './solicitud-inicio/solicitud-inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';

@NgModule({
  declarations: [SolicitudInicioComponent, SolicitudListComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudModule { }
