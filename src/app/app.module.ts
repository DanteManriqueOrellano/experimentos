import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AUnoComponent } from './a/a-uno/a-uno.component';
import { ADosComponent } from './a/a-dos/a-dos.component';
import { BUnoComponent } from './b/b-uno/b-uno.component';
import { BDosComponent } from './b/b-dos/b-dos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArootComponent } from './a/aroot/aroot.component';
import { BrootComponent } from './b/broot/broot.component';
import { AbComponent } from './c/ab/ab.component';

@NgModule({
  declarations: [
    AppComponent,
    AUnoComponent,
    ADosComponent,
    BUnoComponent,
    BDosComponent,
    ArootComponent,
    BrootComponent,
    AbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
