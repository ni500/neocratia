import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PoliticiansComponent } from './politicians.component';


const routes: Routes = [
  { path: '', component: PoliticiansComponent }
];

@NgModule({
  declarations: [PoliticiansComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PoliticiansModule { }
