import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliaPage } from './biblia.page';

const routes: Routes = [
  {
    path: '',
    component: BibliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliaPageRoutingModule {}
