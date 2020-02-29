import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './ui/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './shared/ng-material.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'politicos',
          loadChildren: () =>
            import('./politicians/politicians.module').then(
              m => m.PoliticiansModule
            )
        },
        {
          path: 'decisiones',
          loadChildren: () =>
            import('./decisions/decisions.module').then(m => m.DecisionsModule)
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    NgMaterialModule,
    UiModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
