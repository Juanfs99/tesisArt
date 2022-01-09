import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowArtPage } from './how-art.page';

const routes: Routes = [
  {
    path: '',
    component: HowArtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowArtPageRoutingModule {}
