import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HComponent } from './h/h.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JComponent } from './j/j.component';



@NgModule({
  declarations: [HComponent, JComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[HComponent]
})
export class HModule { }
