import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PoliticosListComponent } from './politicos-list/politicos-list.component';
import { PoliticoPageComponent } from './politico-page/politico-page.component';
import { SharedDataPoliticiansModule } from '@neocratia/shared/data-politicians';
import { SharedUiPoliticiansModule } from '@neocratia/shared/ui-politicians';

@NgModule({
  imports: [
    CommonModule,
    SharedUiPoliticiansModule,
    SharedDataPoliticiansModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PoliticosListComponent },
      { path: ':id', pathMatch: 'full', component: PoliticoPageComponent }
    ])
  ],
  declarations: [PoliticosListComponent, PoliticoPageComponent]
})
export class ColombiaFeaturePoliticosModule {}
