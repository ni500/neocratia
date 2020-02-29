import { VotesModule } from './../votes/votes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PoliticiansComponent } from './politicians.component';
import { NgMaterialModule } from '../shared/ng-material.module';
import { PoliticiansListComponent } from './politicians-list/politicians-list.component';
import { PoliticianViewComponent } from './politician-view/politician-view.component';
import { CreatePoliticianComponent } from './create-politician/create-politician.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PoliticiansComponent },
  {
    path: ':id',
    component: PoliticiansComponent
  }
];

@NgModule({
  declarations: [
    PoliticiansComponent,
    PoliticiansListComponent,
    PoliticianViewComponent,
    CreatePoliticianComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    VotesModule
  ]
})
export class PoliticiansModule {}
