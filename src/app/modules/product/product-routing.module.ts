import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProdutCreatorComponent } from './admin/produt-creator/produt-creator.component';
import { ProdutEditorComponent } from './admin/produt-editor/produt-editor.component';
import { ProdutDetailsComponent } from './admin/produt-details/produt-details.component';
import { ProdutHomeComponent } from './admin/produt-home/produt-home.component';

const routes: Routes = [
  {
    path:'admin/product/list',
    component: ProductListComponent
  },
  {
    path:'admin/product/creator',
    component: ProdutCreatorComponent
  },
  {
    path:'admin/product/editor',
    component: ProdutEditorComponent
  },
  {
    path:'product/details/:id',
    component: ProdutDetailsComponent
  },
  {
    path:'product/home',
    component: ProdutHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
