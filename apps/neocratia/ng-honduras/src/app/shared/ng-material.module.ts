import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialModules],
  exports: [materialModules]
})
export class NgMaterialModule {}
