import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercaRoutingModule } from './acerca-routing.module';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';

@NgModule({
  declarations: [MisionComponent, VisionComponent],
  imports: [
    CommonModule,
    AcercaRoutingModule
  ]
})
export class AcercaModule { }
