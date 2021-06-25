import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresionPage } from './presion.page';

const routes: Routes = [
  {
    path: '',
    component: PresionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresionPageRoutingModule {}
