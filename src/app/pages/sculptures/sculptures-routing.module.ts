import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SculpturesPage } from './sculptures.page';

const routes: Routes = [
  {
    path: '',
    component: SculpturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SculpturesPageRoutingModule {}
