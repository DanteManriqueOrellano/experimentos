import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EComponent } from './e/e.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenedoreComponent } from './contenedore/contenedore.component';
import { AModule } from '../a/a.module';



@NgModule({
  declarations: [EComponent, ContenedoreComponent],
  imports: [
    CommonModule,
    AModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[EComponent]
})
export class EModule { }
