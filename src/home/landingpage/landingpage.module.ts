import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingpagePageRoutingModule } from './landingpage-routing.module';

import { LandingpagePage } from './landingpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingpagePageRoutingModule
  ],
  declarations: [LandingpagePage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LandingpagePageModule {}
