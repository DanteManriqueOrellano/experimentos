import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { IDistrito } from './IDistrito';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-distrito-form',
  templateUrl: './distrito-form.component.html',
  styleUrls: ['./distrito-form.component.css'],
  providers: subformComponentProviders(DistritoFormComponent)
})
export class DistritoFormComponent extends NgxSubFormComponent<IDistrito>  {

  protected getFormControls():Controls<IDistrito>{
    return {
      nombre_distrito: new FormControl(),
      cacerios: new FormArray([])
    }
  }

  agregarCacerio(){
    this.formGroupControls.cacerios.push(new FormControl())
  }
  eliminarCacerio(index:number):void{
    this.formGroupControls.cacerios.removeAt(index)

  }
}
