import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSubirPage } from './modal-subir.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSubirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSubirPageRoutingModule {}
