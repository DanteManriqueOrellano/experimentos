import { Component } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

export interface IB1 {
  b_uno:string;
}

@Component({
  selector: 'app-b-uno',
  templateUrl: './b-uno.component.html',
  styleUrls: ['./b-uno.component.css'],
  providers:subformComponentProviders(BUnoComponent),
})
export class BUnoComponent extends NgxSubFormComponent<IB1> {

  protected getFormControls():Controls<IB1>{
    return {
      b_uno: new FormControl()
    }
  }

}
