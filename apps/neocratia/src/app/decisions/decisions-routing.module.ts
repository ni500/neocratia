import { ViewDecisionComponent } from './view-decision/view-decision.component';
import { DecisionsListComponent } from './decisions-list/decisions-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DecisionsListComponent
  },
  {
    path: ':id',
    component: ViewDecisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecisionsRoutingModule {}
