import { NgMaterialModule } from './../shared/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetVoteComponent } from './set-vote/set-vote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VotesListComponent } from './votes-list/votes-list.component';

@NgModule({
  declarations: [SetVoteComponent, VotesListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgMaterialModule],
  exports: [SetVoteComponent, VotesListComponent]
})
export class VotesModule {}
