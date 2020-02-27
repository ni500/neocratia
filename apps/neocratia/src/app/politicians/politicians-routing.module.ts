import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticiansComponent } from './politicians.component';

const routes: Routes = [
  {
    path: '',
    component: PoliticiansComponent
  },
  {
    path: ':id',
    component: PoliticiansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticiansRoutingModule {}
