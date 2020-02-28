import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreatorComponent } from './category/category-creator/category-creator.component';
import { CategoryEditorComponent } from './category/category-editor/category-editor.component';

const routes: Routes = [
  {
    path:'admin/category/list',
    component: CategoryListComponent
  },
  {
    path:'admin/category/creator',
    component: CategoryCreatorComponent
  },
  {
    path:'admin/category/editor',
    component: CategoryEditorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
