import { Component } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface ICentroPoblado {
  nombre_centro_poblado:string;
}
@Component({
  selector: 'app-centro-poblado',
  templateUrl: './centro-poblado.component.html',
  styleUrls: ['./centro-poblado.component.css'],
  providers:subformComponentProviders(CentroPobladoComponent)
})
export class CentroPobladoComponent extends NgxSubFormComponent<ICentroPoblado> {

  protected getFormControls():Controls<ICentroPoblado>{
    return {
      nombre_centro_poblado: new FormControl()
    }
  }
}
