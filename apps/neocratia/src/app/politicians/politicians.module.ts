import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticiansRoutingModule } from './politicians-routing.module';
import { PoliticiansComponent } from './politicians.component';
import { PoliticiansListComponent } from './politicians-list/politicians-list.component';
import { PoliticianViewComponent } from './politician-view/politician-view.component';

@NgModule({
  declarations: [
    PoliticiansComponent,
    PoliticiansListComponent,
    PoliticianViewComponent
  ],
  imports: [CommonModule, PoliticiansRoutingModule]
})
export class PoliticiansModule {}
