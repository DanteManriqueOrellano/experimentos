import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { AbComponent } from './ab/ab.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CRoutingModule,
    AbComponent,
  ]
})
export class CModule { }
