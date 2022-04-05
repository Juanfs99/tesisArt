import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMensualPage } from './modal-mensual.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMensualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMensualPageRoutingModule {}
