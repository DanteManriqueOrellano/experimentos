import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders, NgxRootFormComponent, DataInput } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { IJ } from '../j/j.component';
export interface IH {
  h_uno:string;
  j:IJ;
}

@Component({
  selector: 'app-h',
  templateUrl: './h.component.html',
  styleUrls: ['./h.component.css'],
  providers: subformComponentProviders(HComponent)
})
export class HComponent extends NgxRootFormComponent<IH>  {
@DataInput()
dataInput: Required<IH>;
dataOutput: EventEmitter<IH>;

protected getFormControls():Controls<IH>{
  return {
    h_uno: new FormControl(),
    j: new FormControl()
  }
}
}
