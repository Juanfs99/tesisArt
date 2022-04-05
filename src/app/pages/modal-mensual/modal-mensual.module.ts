import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMensualPageRoutingModule } from './modal-mensual-routing.module';

import { SubirPage } from '../subir/subir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMensualPageRoutingModule
  ],
  declarations: [],
  providers: [
    SubirPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalMensualPageModule { }
