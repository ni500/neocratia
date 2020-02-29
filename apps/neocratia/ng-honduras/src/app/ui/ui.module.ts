import { VotesModule } from './../votes/votes.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgMaterialModule } from '../shared/ng-material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, HomeComponent],
  imports: [CommonModule, NgMaterialModule, RouterModule, VotesModule],
  exports: [ToolbarComponent, SidenavComponent]
})
export class UiModule {}
