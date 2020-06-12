import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl, FormArray } from '@angular/forms';
import { ICentroPoblado } from '../centro-poblado/centro-poblado.component';
export interface ICacerio {
  nombre_cacerio:string;
  centros_poblados:ICentroPoblado[];
}

@Component({
  selector: 'app-cacerio',
  templateUrl: './cacerio.component.html',
  styleUrls: ['./cacerio.component.css'],
  providers:subformComponentProviders(CacerioComponent)
})
export class CacerioComponent extends NgxSubFormComponent<ICacerio> {

  protected getFormControls():Controls<ICacerio>{
    return {
      nombre_cacerio: new FormControl(),
      centros_poblados: new FormArray([])
    }
  }
  eliminarCentroPoblado(i){
    this.formGroupControls.centros_poblados.removeAt(i)
    
  }
  agregarCentroPoblado(){
    this.formGroupControls.centros_poblados.push(new FormControl())
  }
}
