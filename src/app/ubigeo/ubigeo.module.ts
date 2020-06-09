import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { ProvinciaFormComponent } from './provincia-form/provincia-form.component';
import { DistritoFormComponent } from './distrito-form/distrito-form.component';
import { CacerioFormComponent } from './cacerio-form/cacerio-form.component';
import { CpFormComponent } from './cp-form/cp-form.component';
import { AnexoFormComponent } from './anexo-form/anexo-form.component';
import { BarrioFormComponent } from './barrio-form/barrio-form.component';
import { UbigeoContainerComponent } from './ubigeo-container/ubigeo-container.component';
import { UbigeoRoutingModule } from './ubigeo-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainUbigeoComponent } from './main-ubigeo/main-ubigeo.component';


@NgModule({
  declarations: [DepartamentoFormComponent, ProvinciaFormComponent, DistritoFormComponent, CacerioFormComponent, CpFormComponent, AnexoFormComponent, BarrioFormComponent, UbigeoContainerComponent, MainUbigeoComponent],
  imports: [
    CommonModule,
    UbigeoRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  exports:[DepartamentoFormComponent, ProvinciaFormComponent, DistritoFormComponent, CacerioFormComponent, CpFormComponent, AnexoFormComponent, BarrioFormComponent, UbigeoContainerComponent,MainUbigeoComponent]
})
export class UbigeoModule { }
