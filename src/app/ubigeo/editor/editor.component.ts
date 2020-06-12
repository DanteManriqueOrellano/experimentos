import { Component, OnInit, EventEmitter } from '@angular/core';
import { IDepartamento } from './departamento/departamento.component';
import { subformComponentProviders, NgxRootFormComponent, Controls, DataInput } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IUbigeo {
  departamento:IDepartamento
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers:subformComponentProviders(EditorComponent)
})
export class EditorComponent extends NgxRootFormComponent<IUbigeo> {
  @DataInput()
  dataInput: Required<IUbigeo>;
  dataOutput: EventEmitter<IUbigeo>;
  
  protected getFormControls(): Controls<IUbigeo> {
    return {
      departamento: new FormControl()
    }
  }


}
