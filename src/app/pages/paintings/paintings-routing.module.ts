import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaintingsPage } from './paintings.page';

const routes: Routes = [
  {
    path: '',
    component: PaintingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingsPageRoutingModule {}
