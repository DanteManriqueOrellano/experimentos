import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { ICp } from './ICp';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.css'],
  providers:subformComponentProviders(CpFormComponent)

})
export class CpFormComponent extends NgxSubFormComponent<ICp>  {

  protected getFormControls():Controls<ICp>{
    return {
      nombre_cp:new FormControl(),
      anexos: new FormArray([])
    }
  }

  agregarAnexo(){
    this.formGroupControls.anexos.push(new FormControl)

  }
  eliminarAnexo(index:number):void{
    this.formGroupControls.anexos.removeAt(index)
  }

  

}
