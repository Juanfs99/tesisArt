import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistainfoPage } from './artistainfo.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistainfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistainfoPageRoutingModule {}
