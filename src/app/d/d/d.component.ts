import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders, NgxRootFormComponent, DataInput } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

export interface ID {
  d_uno:string;
}
@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css'],
  providers:subformComponentProviders(DComponent)
})
export class DComponent extends NgxSubFormComponent<ID> {
  
  protected getFormControls():Controls<ID>{
    return {
      d_uno: new FormControl()
    }
  }


}
