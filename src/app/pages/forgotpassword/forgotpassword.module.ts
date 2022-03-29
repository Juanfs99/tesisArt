import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPageRoutingModule } from './forgotpassword-routing.module';

import { ForgotpasswordPage } from './forgotpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpasswordPageRoutingModule
  ],
  declarations: [ForgotpasswordPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ForgotpasswordPageModule { }
