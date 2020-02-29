import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DecisionsComponent } from './decisions.component';


const routes: Routes = [
  { path: '', component: DecisionsComponent }
];

@NgModule({
  declarations: [DecisionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DecisionsModule { }
