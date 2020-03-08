import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAsesorComponent } from './add-asesor/add-asesor.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';
import { InicioComponent } from './inicio/inicio.component';
import { CrearCiudadComponent } from './crear-ciudad/crear-ciudad.component';
import { CrearTipoComponent } from './crear-tipo/crear-tipo.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';

const routes: Routes = [
  {
    path:'admin/inicio/crear-asesor',
    component: AddAsesorComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'admin/inicio',
    component: InicioComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'admin/inicio/crear-ciudad',
    component: CrearCiudadComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'admin/inicio/crear-tipo',
    component: CrearTipoComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'admin/inicio/lista-solicitudes',
    component: ListaSolicitudesComponent,
    canActivate: [AuthenticationRequiredGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
