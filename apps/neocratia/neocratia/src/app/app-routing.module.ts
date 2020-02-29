import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './ui/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

const app_routes = [
  { path: '', component: HomeComponent },
  {
    path: 'politicos',
    loadChildren: () =>
      import('./politicians/politicians.module').then(m => m.PoliticiansModule)
  },
  {
    path: 'decisiones',
    loadChildren: () =>
      import('./decisions/decisions.module').then(m => m.DecisionsModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
