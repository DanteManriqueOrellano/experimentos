import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IJ{
  j_uno:string;
}
@Component({
  selector: 'app-j',
  templateUrl: './j.component.html',
  styleUrls: ['./j.component.css'],
  providers:subformComponentProviders(JComponent)
})
export class JComponent extends NgxSubFormComponent<IJ>  {

  protected getFormControls():Controls<IJ>{
    return {
      j_uno: new FormControl(),
    }
  }


}
