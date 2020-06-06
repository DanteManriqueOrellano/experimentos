import { Component } from '@angular/core';

import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IG1 {
  g_comun1:string
}
@Component({
  selector: 'app-g-uno',
  templateUrl: './g-uno.component.html',
  styleUrls: ['./g-uno.component.css'],
  providers: subformComponentProviders(GUnoComponent)
})
export class GUnoComponent extends NgxSubFormComponent<IG1> {

  protected getFormControls():Controls<IG1>{
    return {
      g_comun1: new FormControl()
    }
  }


}
