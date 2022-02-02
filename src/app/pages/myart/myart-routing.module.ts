import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyartPage } from './myart.page';

const routes: Routes = [
  {
    path: '',
    component: MyartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyartPageRoutingModule {}
