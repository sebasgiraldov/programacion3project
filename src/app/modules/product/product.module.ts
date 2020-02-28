import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProdutCreatorComponent } from './admin/produt-creator/produt-creator.component';
import { ProdutEditorComponent } from './admin/produt-editor/produt-editor.component';
import { ProdutHomeComponent } from './admin/produt-home/produt-home.component';
import { ProdutDetailsComponent } from './admin/produt-details/produt-details.component';

@NgModule({
  declarations: [ProductListComponent, ProdutCreatorComponent, ProdutEditorComponent, ProdutHomeComponent, ProdutDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProdutCreatorComponent,
    ProdutEditorComponent,
    ProdutDetailsComponent, 
    ProdutHomeComponent
  ]
})
export class ProductModule { }
