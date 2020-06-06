import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GRoutingModule } from './g-routing.module';
import { GComponent } from './g/g.component';
import { GUnoComponent } from './g-uno/g-uno.component';
import { GDosComponent } from './g-dos/g-dos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GComponent, GUnoComponent, GDosComponent],
  imports: [
    CommonModule,
    GRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [GComponent, GUnoComponent, GDosComponent]
})
export class GModule { }
