import { NgMaterialModule } from '@neocratia/shared/themes';
import { SharedUiMainNavModule } from '@neocratia/shared/ui-main-nav';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

export const colombiaRoutes: Routes = [
  {
    path: 'colombia-feature-politicos',
    loadChildren: () =>
      import('@neocratia/colombia/feature-politicos').then(
        module => module.ColombiaFeaturePoliticosModule
      )
  }
];
@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    SharedUiMainNavModule,
    NgMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: colombiaRoutes
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ]
})
export class ColombiaFeatureShellModule {}
