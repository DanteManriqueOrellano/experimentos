import { Component } from '@angular/core';
import { IBaseF, FType } from '../f/f.component';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IF_uno extends IBaseF {
  fType: FType.UNO
}

@Component({
  selector: 'app-if-uno',
  templateUrl: './if-uno.component.html',
  styleUrls: ['./if-uno.component.css'],
  providers:subformComponentProviders(IFUnoComponent)
})
export class IFUnoComponent extends NgxSubFormComponent<IF_uno>  {
  
  protected getFormControls():Controls<IF_uno>{
    return {
     
      fType: new FormControl(),
      f_comun: new FormControl()
    }
  }


}
