import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRoutingModule } from './d-routing.module';
import { DComponent } from './d/d.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UbigeoModule } from '../ubigeo/ubigeo.module';


@NgModule({
  declarations: [DComponent],
  imports: [
    CommonModule,
    DRoutingModule,
    UbigeoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[DComponent]
})
export class DModule { }
