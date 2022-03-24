import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSubirPageRoutingModule } from './modal-subir-routing.module';

import { ModalSubirPage } from './modal-subir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSubirPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalSubirPage]
})
export class ModalSubirPageModule { }
