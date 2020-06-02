import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BUnoComponent } from './b-uno/b-uno.component';
import { BDosComponent } from './b-dos/b-dos.component';
import { BrootComponent } from './broot/broot.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BRoutingModule,
    BUnoComponent,
    BDosComponent,
    BrootComponent,
  ]
})
export class BModule { }
