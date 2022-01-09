import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowArtPageRoutingModule } from './how-art-routing.module';

import { HowArtPage } from './how-art.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowArtPageRoutingModule
  ],
  declarations: [HowArtPage]
})
export class HowArtPageModule {}
