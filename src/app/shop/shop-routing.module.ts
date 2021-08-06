import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { shopPage } from './shop.page';

const routes: Routes = [
  {
    path: '',
    component: shopPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class shopPageRoutingModule {}
