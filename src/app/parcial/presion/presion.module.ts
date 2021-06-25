import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresionPageRoutingModule } from './presion-routing.module';

import { PresionPage } from './presion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresionPageRoutingModule
  ],
  declarations: [PresionPage]
})
export class PresionPageModule {}
