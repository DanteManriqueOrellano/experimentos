import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FRoutingModule } from './f-routing.module';
import { FComponent } from './f/f.component';
import { IFUnoComponent } from './if-uno/if-uno.component';
import { IFDosComponent } from './if-dos/if-dos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FComponent, IFUnoComponent, IFDosComponent],
  imports: [
    CommonModule,
    FRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FComponent, IFUnoComponent, IFDosComponent]
})
export class FModule { }
