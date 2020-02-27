import { NgMaterialModule } from './../shared/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetVoteComponent } from './set-vote/set-vote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SetVoteComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgMaterialModule],
  exports: [SetVoteComponent]
})
export class VotesModule {}
