import { NgMaterialModule } from '@neocratia/shared/themes';
import { RouterModule } from '@angular/router';
import { PoliticiansListComponent } from './politicians-list/politicians-list.component';
import { PoliticianViewComponent } from './politician-view/politician-view.component';
import { CreatePoliticianComponent } from './create-politician/create-politician.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const politiciansComponents = [
  CreatePoliticianComponent,
  PoliticianViewComponent,
  PoliticiansListComponent
];
@NgModule({
  declarations: [politiciansComponents],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgMaterialModule
  ],
  exports: [politiciansComponents]
})
export class SharedUiPoliticiansModule {}
