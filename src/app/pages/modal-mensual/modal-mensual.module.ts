import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMensualPageRoutingModule } from './modal-mensual-routing.module';

import { ModalMensualPage } from './modal-mensual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMensualPageRoutingModule
  ],
  declarations: [ModalMensualPage]
})
export class ModalMensualPageModule {}
