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



@NgModule({
  declarations: [ListaComponent, EditorComponent, UbigeoComponent, DepartamentoComponent, ProvinciaComponent, DistritoComponent, CacerioComponent, CentroPobladoComponent],
  imports: [
    CommonModule,
    UbigeoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[ListaComponent, EditorComponent, UbigeoComponent,DepartamentoComponent]
})
export class UbigeoModule { }
