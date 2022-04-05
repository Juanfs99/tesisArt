import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGaleriaPage } from './modal-galeria.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGaleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGaleriaPageRoutingModule {}
