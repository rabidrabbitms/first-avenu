import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { shopPage } from './shop.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { shopPageRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    shopPageRoutingModule
  ],
  declarations: [shopPage]
})
export class shopPageModule {}
