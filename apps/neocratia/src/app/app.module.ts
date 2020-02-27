import { PoliticiansService } from './politicians/politicians.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { NgMaterialModule } from './shared/ng-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/Auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    NgMaterialModule,
    UiModule
  ],
  providers: [PoliticiansService],
  bootstrap: [AppComponent]
})
export class AppModule {}
