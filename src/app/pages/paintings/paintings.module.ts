import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  declarations: [PaintingsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PaintingsPageModule { }
