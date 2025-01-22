import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliaPageRoutingModule } from './biblia-routing.module';

import { BibliaPage } from './biblia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliaPageRoutingModule
  ],
  declarations: [BibliaPage]
})
export class BibliaPageModule {}
