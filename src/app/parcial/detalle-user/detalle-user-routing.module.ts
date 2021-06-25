import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleUserPage } from './detalle-user.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleUserPageRoutingModule {}
