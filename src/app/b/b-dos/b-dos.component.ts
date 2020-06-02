import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';


export interface IB2 {
  b_dos:string;
}
@Component({
  selector: 'app-b-dos',
  templateUrl: './b-dos.component.html',
  styleUrls: ['./b-dos.component.css'],
  providers:subformComponentProviders(BDosComponent)
})
export class BDosComponent extends NgxSubFormComponent<IB2>  {

  protected getFormControls():Controls<IB2>{
    return {
      b_dos: new FormControl()
    }

  }


}
