import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { IProvincia } from './IProvincia';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-provincia-form',
  templateUrl: './provincia-form.component.html',
  styleUrls: ['./provincia-form.component.css'],
  providers:subformComponentProviders(ProvinciaFormComponent)
})
export class ProvinciaFormComponent extends NgxSubFormComponent<IProvincia>  {

  protected getFormControls():Controls<IProvincia>{
    return {
      nombre_provincia: new FormControl(),
      distritos: new FormArray([])
    }
  }

  agregarDistrito(){
    this.formGroupControls.distritos.push(new FormControl())

  }
  eliminarDistrito(i){
    this.formGroupControls.distritos.removeAt(i)

  }
}
