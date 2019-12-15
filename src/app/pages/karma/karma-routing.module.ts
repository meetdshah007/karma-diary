import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarmaPage } from './karma.page';

const routes: Routes = [
  {
    path: '',
    component: KarmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarmaPageRoutingModule {}
