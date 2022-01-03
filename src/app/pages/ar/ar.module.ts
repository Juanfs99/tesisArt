import { ComponentesModule } from './../../componentes/componentes.module';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArPageRoutingModule } from './ar-routing.module';

import { ArPage } from './ar.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ArPage],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ArPageModule {}
