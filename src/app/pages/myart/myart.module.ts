import { NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyartPageRoutingModule } from './myart-routing.module';

import { MyartPage } from './myart.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyartPageRoutingModule
  ],
  declarations: [MyartPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MyartPageModule {
}
