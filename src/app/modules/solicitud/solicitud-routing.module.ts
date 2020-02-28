import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';
import { SolicitudInicioComponent } from './solicitud-inicio/solicitud-inicio.component';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';

const routes: Routes = [
  {
    path:'solicitud/:id',
    component: SolicitudInicioComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'solicitud-list',
    component: SolicitudListComponent,
    canActivate: [AuthenticationRequiredGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
