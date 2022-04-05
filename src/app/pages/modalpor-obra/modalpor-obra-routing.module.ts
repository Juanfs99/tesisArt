import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalporObraPage } from './modalpor-obra.page';

const routes: Routes = [
  {
    path: '',
    component: ModalporObraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalporObraPageRoutingModule {}
