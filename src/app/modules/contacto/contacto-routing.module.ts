import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactformComponent } from './contactform/contactform.component';

const routes: Routes = [

  {
    path: 'contacto',
    component: ContactformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
