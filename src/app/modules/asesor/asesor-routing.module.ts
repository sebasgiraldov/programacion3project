import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';
import { InicioComponent } from '../asesor/inicio/inicio.component';
import { ListComponent } from './list/list.component';
import { SoliComponent } from './soli/soli.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path:'asesor/crear',
    component: CrearComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'asesor/list',
    component: ListComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'asesor/edit/:id',
    component: EditarComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'asesor/solicitudes',
    component: SoliComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'asesor',
    component: InicioComponent,
    canActivate: [AuthenticationRequiredGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
