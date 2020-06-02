import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { ADosComponent } from './a-dos/a-dos.component';
import { AUnoComponent } from './a-uno/a-uno.component';
import { ArootComponent } from './aroot/aroot.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ARoutingModule,
    AUnoComponent,
    ADosComponent,
    ArootComponent,
  ]
})
export class AModule { }
