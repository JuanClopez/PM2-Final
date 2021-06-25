import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleUserPageRoutingModule } from './detalle-user-routing.module';

import { DetalleUserPage } from './detalle-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleUserPageRoutingModule
  ],
  declarations: [DetalleUserPage]
})
export class DetalleUserPageModule {}
