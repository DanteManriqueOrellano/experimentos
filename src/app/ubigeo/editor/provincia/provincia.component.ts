import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { IDistrito } from '../distrito/distrito.component';
export interface IProvincia {
  nombre_provincia:string;
  distrito:IDistrito;
}

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css'],
  providers:subformComponentProviders(ProvinciaComponent)
})
export class ProvinciaComponent extends NgxSubFormComponent<IProvincia>  {

  protected getFormControls():Controls<IProvincia>{
    return {
      nombre_provincia: new FormControl(),
      distrito: new FormControl()
    }
  }
}
