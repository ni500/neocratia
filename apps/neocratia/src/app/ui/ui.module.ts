import { RouterModule } from '@angular/router';
import { NgMaterialModule } from './../shared/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [SideMenuComponent, HomeComponent, ToolbarComponent],
  imports: [CommonModule, NgMaterialModule, RouterModule],
  exports: [ToolbarComponent, SideMenuComponent]
})
export class UiModule {}
