import { Component,EventEmitter } from '@angular/core';
import { NgxRootFormComponent, subformComponentProviders, DataInput, Controls } from 'ngx-sub-form';
import { IA1 } from '../a-uno/a-uno.component';
import { IA2 } from '../a-dos/a-dos.component';
import { FormControl } from '@angular/forms';

export interface IA{
  a1:IA1;
  a2:IA2;
}
@Component({
  selector: 'app-aroot',
  templateUrl: './aroot.component.html',
  styleUrls: ['./aroot.component.css'],
  providers:subformComponentProviders(ArootComponent)
})
export class ArootComponent extends NgxRootFormComponent<IA>  {
  
  @DataInput()
  dataInput: Required<IA>;
  dataOutput: EventEmitter<IA>;
  
  protected getFormControls(): Controls<IA> {
    return {
      a1: new FormControl(),
      a2: new FormControl(),
    }
  }

}
