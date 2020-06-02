import { Component,EventEmitter, Input } from '@angular/core';
import { NgxRootFormComponent, DataInput, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IA } from '../../a/aroot/aroot.component';
import { IB } from '../../b/broot/broot.component';
import { FormControl } from '@angular/forms';

export interface IAB{
  aba:IA;
  abb:IB;
}
@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css'],
  providers:subformComponentProviders(AbComponent)
})
export class AbComponent extends NgxRootFormComponent<IAB> {
  @DataInput()
  @Input('ab$')
  dataInput: Required<IAB>;
  dataOutput: EventEmitter<IAB> = new EventEmitter();
  protected getFormControls(): Controls<IAB> {
    return {
      aba: new FormControl(),
      abb: new FormControl(),
    }
  }


}
