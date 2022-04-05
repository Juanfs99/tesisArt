import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGaleriaPageRoutingModule } from './modal-galeria-routing.module';

import { ModalGaleriaPage } from './modal-galeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGaleriaPageRoutingModule
  ],
  declarations: [ModalGaleriaPage]
})
export class ModalGaleriaPageModule {}
