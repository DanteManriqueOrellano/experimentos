import { Component } from '@angular/core';
import { IBaseF, FType } from '../f/f.component';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

export interface IF_dos extends IBaseF {
  fType:FType.DOS
}

@Component({
  selector: 'app-if-dos',
  templateUrl: './if-dos.component.html',
  styleUrls: ['./if-dos.component.css'],
  providers:subformComponentProviders(IFDosComponent)
})
export class IFDosComponent extends NgxSubFormComponent<IF_dos>  {

  protected getFormControls():Controls<IF_dos>{
    return {
      f_comun: new FormControl(),
      fType: new FormControl(),
    }
  }


}
