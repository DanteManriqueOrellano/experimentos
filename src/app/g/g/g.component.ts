import { Component,EventEmitter } from '@angular/core';
import { IG1 } from '../g-uno/g-uno.component';
import { NgxRootFormComponent, Controls, subformComponentProviders, DataInput } from 'ngx-sub-form';
import { IG2 } from '../g-dos/g-dos.component';
import { FormControl } from '@angular/forms';


export interface IG{
  g1:IG1;
  g2:IG2;
}
@Component({
  selector: 'app-g',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.css'],
  providers: subformComponentProviders(GComponent)
})
export class GComponent extends NgxRootFormComponent<IG>  {
  @DataInput()
  dataInput: Required<IG>;
  dataOutput: EventEmitter<IG>;

  protected getFormControls():Controls<IG>{
    return {
      g1: new FormControl(),
      g2: new FormControl(),
    }
  }

  

}
