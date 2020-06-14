import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { EditorComponent } from './editor/editor.component';
import { UbigeoComponent } from './ubigeo/ubigeo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentoComponent } from './editor/departamento/departamento.component';
import { ProvinciaComponent } from './editor/provincia/provincia.component';
import { DistritoComponent } from './editor/distrito/distrito.component';
import { CacerioComponent } from './editor/cacerio/cacerio.component';
import { CentroPobladoComponent } from './editor/centro-poblado/centro-poblado.component';
import { UbigeoRoutingModule } from './ubigeo-routing.module';
import { SeleccionadoComponent } from './seleccionado/seleccionado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ListaComponent, EditorComponent, UbigeoComponent, DepartamentoComponent, ProvinciaComponent, DistritoComponent, CacerioComponent, CentroPobladoComponent, SeleccionadoComponent, NuevoComponent],
  imports: [
    CommonModule,
    UbigeoRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[ListaComponent, EditorComponent, UbigeoComponent, DepartamentoComponent, ProvinciaComponent, DistritoComponent, CacerioComponent, CentroPobladoComponent, SeleccionadoComponent, NuevoComponent]
})
export class UbigeoModule { }
