import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SculpturesPageRoutingModule } from './sculptures-routing.module';

import { SculpturesPage } from './sculptures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SculpturesPageRoutingModule
  ],
  declarations: [SculpturesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SculpturesPageModule { }
