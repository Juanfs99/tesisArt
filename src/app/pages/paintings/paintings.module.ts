import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaintingsPageRoutingModule } from './paintings-routing.module';

import { PaintingsPage } from './paintings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaintingsPageRoutingModule
  ],
  declarations: [PaintingsPage]
})
export class PaintingsPageModule {}
