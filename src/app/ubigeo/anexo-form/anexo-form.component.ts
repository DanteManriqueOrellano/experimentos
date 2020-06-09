import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { IAnexo } from './IAnexo';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-anexo-form',
  templateUrl: './anexo-form.component.html',
  styleUrls: ['./anexo-form.component.css'],
  providers:subformComponentProviders(AnexoFormComponent)
})
export class AnexoFormComponent extends NgxSubFormComponent<IAnexo>  {

protected getFormControls():Controls<IAnexo>{
  return {
    nombre_anexo: new FormControl(),
    barrios:new FormArray([])
  }
}
agregarBarrio(){
  this.formGroupControls.barrios.push(new FormControl())
}
eliminarBarrio(index:number):void{
  this.formGroupControls.barrios.removeAt(index)
}

}
