import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalImagenPageRoutingModule } from './modal-imagen-routing.module';

import { ModalImagenPage } from './modal-imagen.page';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalImagenPageRoutingModule,
    ImageCropperModule

  ],
  declarations: [ModalImagenPage]
})
export class ModalImagenPageModule { }
