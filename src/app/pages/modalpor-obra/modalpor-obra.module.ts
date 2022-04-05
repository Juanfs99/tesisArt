import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalporObraPageRoutingModule } from './modalpor-obra-routing.module';

import { ModalporObraPage } from './modalpor-obra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalporObraPageRoutingModule
  ],
  declarations: [ModalporObraPage]
})
export class ModalporObraPageModule {}
