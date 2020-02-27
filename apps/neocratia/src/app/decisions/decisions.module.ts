import { NgMaterialModule } from './../shared/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecisionsRoutingModule } from './decisions-routing.module';
import { CreateDecisionComponent } from './create-decision/create-decision.component';
import { ViewDecisionComponent } from './view-decision/view-decision.component';
import { DecisionsListComponent } from './decisions-list/decisions-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateDecisionComponent,
    ViewDecisionComponent,
    DecisionsListComponent
  ],
  imports: [
    CommonModule,
    DecisionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule
  ]
})
export class DecisionsModule {}
