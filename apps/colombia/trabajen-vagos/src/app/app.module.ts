import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedUiMainNavModule } from '@neocratia/shared/ui-main-nav';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@neocratia/colombia/feature-shell').then(
              module => module.ColombiaFeatureShellModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    SharedUiMainNavModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
