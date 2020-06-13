import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { ADosComponent } from './a-dos/a-dos.component';
import { AUnoComponent } from './a-uno/a-uno.component';
import { ArootComponent } from './aroot/aroot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UbigeoModule } from '../ubigeo/ubigeo.module';


@NgModule({
  declarations: [AUnoComponent,ADosComponent,ArootComponent],
  imports: [
    CommonModule,
    ARoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    UbigeoModule,
  ],
  exports:[AUnoComponent,ADosComponent,ArootComponent]
})
export class AModule { }
