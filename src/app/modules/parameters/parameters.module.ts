import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreatorComponent } from './category/category-creator/category-creator.component';
import { CategoryEditorComponent } from './category/category-editor/category-editor.component';

@NgModule({
  declarations: [CategoryListComponent, CategoryCreatorComponent, CategoryEditorComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ], 
  exports:[
    CategoryListComponent,
    CategoryCreatorComponent,
    CategoryEditorComponent
  ]
})
export class ParametersModule { }
