import { Component, EventEmitter } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls, NgxRootFormComponent, DataInput } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { IProvincia } from '../provincia/provincia.component';
export interface IDepartamento {
  nombre_departamento:string;
  provincia:IProvincia;
}
@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers:subformComponentProviders(DepartamentoComponent)
})
export class DepartamentoComponent extends NgxRootFormComponent<IDepartamento> {
  
  @DataInput()
  dataInput: Required<IDepartamento>;
  dataOutput: EventEmitter<IDepartamento>;

  protected getFormControls():Controls<IDepartamento>{
    return {
      nombre_departamento: new FormControl(),
      provincia: new FormControl()
    }
  }
}
