import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import 'firebase/storage'
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [
    { provide: BUCKET, useValue: 'corporacionaquaperu.appspot.com' }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
