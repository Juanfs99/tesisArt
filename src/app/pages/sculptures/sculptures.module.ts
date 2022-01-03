import { NgModule } from '@angular/core';
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
  declarations: [SculpturesPage]
})
export class SculpturesPageModule {}
