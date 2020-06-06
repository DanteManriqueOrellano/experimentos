import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';

import { FormControl } from '@angular/forms';
export interface IG2  {
  g_comun2: string
}
@Component({
  selector: 'app-g-dos',
  templateUrl: './g-dos.component.html',
  styleUrls: ['./g-dos.component.css'],
  providers:subformComponentProviders(GDosComponent)
})
export class GDosComponent extends NgxSubFormComponent<IG2> {

  protected getFormControls():Controls<IG2>{
    return {
      g_comun2: new FormControl()
    }

  }

 
}
