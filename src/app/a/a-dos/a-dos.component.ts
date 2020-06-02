import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

export interface IA2 {
  a_dos:string;
}

@Component({
  selector: 'app-a-dos',
  templateUrl: './a-dos.component.html',
  styleUrls: ['./a-dos.component.css'],
  providers:subformComponentProviders(ADosComponent),

})
export class ADosComponent extends NgxSubFormComponent<IA2> {

  protected getFormControls():Controls<IA2> {
    return {
      a_dos: new FormControl()
    }
  }

}
