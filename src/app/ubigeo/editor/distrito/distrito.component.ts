import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormControl, FormArray } from '@angular/forms';
import { ICacerio } from '../cacerio/cacerio.component';
export interface IDistrito{
  nombre_distrito:string;
  cacerios:ICacerio[];
}

@Component({
  selector: 'app-distrito',
  templateUrl: './distrito.component.html',
  styleUrls: ['./distrito.component.css'],
  providers:subformComponentProviders(DistritoComponent)
})
export class DistritoComponent extends NgxSubFormComponent<IDistrito> {

  protected getFormControls():Controls<IDistrito>{
    return {
      nombre_distrito: new FormControl(),
      cacerios: new FormArray([]),
    }
  }
  eliminarCacerio(i){
    this.formGroupControls.cacerios.removeAt(i)
  }
  agregarCacerio(){
    this.formGroupControls.cacerios.push(new FormControl())
  }
}
