import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistainfoPageRoutingModule } from './artistainfo-routing.module';

import { ArtistainfoPage } from './artistainfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistainfoPageRoutingModule
  ],
  declarations: [ArtistainfoPage]
})
export class ArtistainfoPageModule {}
