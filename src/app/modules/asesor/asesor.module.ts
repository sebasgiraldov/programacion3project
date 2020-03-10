import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { SoliComponent } from './soli/soli.component';
import { EditarComponent } from './editar/editar.component'

@NgModule({
  declarations: [CrearComponent, InicioComponent, ListComponent, SoliComponent, EditarComponent],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class AsesorModule { }
