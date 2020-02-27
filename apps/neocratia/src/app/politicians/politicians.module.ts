import { PoliticiansService } from './politicians.service';
import { NgMaterialModule } from './../shared/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticiansRoutingModule } from './politicians-routing.module';
import { PoliticiansComponent } from './politicians.component';
import { PoliticiansListComponent } from './politicians-list/politicians-list.component';
import { PoliticianViewComponent } from './politician-view/politician-view.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    PoliticiansComponent,
    PoliticiansListComponent,
    PoliticianViewComponent
  ],
  imports: [
    CommonModule,
    PoliticiansRoutingModule,
    NgMaterialModule,
    AngularFirestoreModule
  ]
})
export class PoliticiansModule {}
