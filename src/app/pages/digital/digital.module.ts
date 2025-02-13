import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalPageRoutingModule } from './digital-routing.module';

import { DigitalPage } from './digital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalPageRoutingModule
  ],
  declarations: [DigitalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DigitalPageModule { }
