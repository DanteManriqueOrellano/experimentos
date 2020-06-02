import { Component,EventEmitter } from '@angular/core';
import { NgxRootFormComponent, Controls, DataInput, subformComponentProviders } from 'ngx-sub-form';
import { IB1 } from '../b-uno/b-uno.component';
import { IB2 } from '../b-dos/b-dos.component';
import { FormControl } from '@angular/forms';

export interface IB{
  b1:IB1;
  b2:IB2;
}
@Component({
  selector: 'app-broot',
  templateUrl: './broot.component.html',
  styleUrls: ['./broot.component.css'],
  providers:subformComponentProviders(BrootComponent)
})
export class BrootComponent extends NgxRootFormComponent<IB>  {
  
  @DataInput()
  dataInput: Required<IB>;
  dataOutput: EventEmitter<IB> = new EventEmitter();
  
  protected getFormControls():Controls<IB>{
    return {
       b1: new FormControl(),
       b2: new FormControl()
    }

  }

}
