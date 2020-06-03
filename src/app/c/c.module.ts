import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { AbComponent } from './ab/ab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AModule } from '../a/a.module';
import { BModule } from '../b/b.module';
import { DModule } from '../d/d.module';


@NgModule({
  declarations: [AbComponent],
  imports: [
    CommonModule,
    CRoutingModule,
    AModule,
    BModule,
    DModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[AbComponent]
})
export class CModule { }
