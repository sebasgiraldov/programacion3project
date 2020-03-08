import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametersModule } from './modules/parameters/parameters.module';
import { ProductModule } from './modules/product/product.module';
import { HomeComponent } from './template/home/home.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';
import { UsersModule } from './modules/users/users.module';
import { HeroComponent } from './template/hero/hero.component';
import { AcercaModule } from './modules/acerca/acerca.module';
import { ContactoModule } from './modules/contacto/contacto.module';
import { SolicitudModule } from './modules/solicitud/solicitud.module';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { AsesorModule } from './modules/asesor/asesor.module';

const routes: Routes = [
  {
    path: 'home',
    component: HeroComponent
  },
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ParametersModule,
    ProductModule,
    UsersModule,
    ContactoModule,
    SolicitudModule,
    AdministratorModule,
    AsesorModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
