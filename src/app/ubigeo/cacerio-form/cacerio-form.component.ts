import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { ICacerio } from './ICacerio';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cacerio-form',
  templateUrl: './cacerio-form.component.html',
  styleUrls: ['./cacerio-form.component.css'],
  providers:subformComponentProviders(CacerioFormComponent)
})
export class CacerioFormComponent extends NgxSubFormComponent<ICacerio>{

  protected getFormControls():Controls<ICacerio>{
    return{
      nombre_cacerio:new FormControl(),
      cps: new FormArray([])
    }
  }
  agregarCp(){
    this.formGroupControls.cps.push(new FormControl())
  }
  eliminarCp(index:number):void {
    this.formGroupControls.cps.removeAt(index)
  }
}
