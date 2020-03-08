import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '@neocratia/shared/themes';
@NgModule({
  declarations: [SidenavComponent, ToolbarComponent],
  imports: [CommonModule, NgMaterialModule, RouterModule],
  exports: [SidenavComponent, ToolbarComponent]
})
export class SharedUiMainNavModule {}
