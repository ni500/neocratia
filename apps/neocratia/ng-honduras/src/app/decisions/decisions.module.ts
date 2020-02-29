import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DecisionsComponent } from './decisions.component';
import { NgMaterialModule } from '../shared/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecisionsListComponent } from './decisions-list/decisions-list.component';
import { ViewDecisionComponent } from './view-decision/view-decision.component';
import { CreateDecisionComponent } from './create-decision/create-decision.component';

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
  declarations: [
    DecisionsComponent,
    CreateDecisionComponent,
    ViewDecisionComponent,
    DecisionsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule
  ]
})
export class DecisionsModule {}
