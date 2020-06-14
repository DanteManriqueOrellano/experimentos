import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDepartamento } from './departamento/departamento.component';
import { subformComponentProviders, NgxRootFormComponent, Controls, DataInput } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IUbigeo {
  departamento:IDepartamento,
  docId:string;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers:subformComponentProviders(EditorComponent)
})
export class EditorComponent extends NgxRootFormComponent<IUbigeo> {
  @DataInput()
  @Input('ubigeosData')
  dataInput: Required<IUbigeo>;
  @Output('ubigeoDataUpdate')
  dataOutput: EventEmitter<IUbigeo> = new EventEmitter();
  
  protected getFormControls(): Controls<IUbigeo> {
    return {
      departamento: new FormControl(),
      docId: new FormControl(),
    }
  }
}
