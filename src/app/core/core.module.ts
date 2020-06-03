import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { AModule } from '../a/a.module';
import { BModule } from '../b/b.module';
import { CModule } from '../c/c.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DModule } from '../d/d.module';
import { EModule } from '../e/e.module';


@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
   
    CModule,
    FormsModule,
    ReactiveFormsModule,
    DModule,
    EModule
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
