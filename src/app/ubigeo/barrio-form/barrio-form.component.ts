import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders, Controls } from 'ngx-sub-form';
import { IBarrio } from './IBarrio';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-barrio-form',
  templateUrl: './barrio-form.component.html',
  styleUrls: ['./barrio-form.component.css'],
  providers: subformComponentProviders(BarrioFormComponent)
})
export class BarrioFormComponent extends NgxSubFormComponent<IBarrio> {

  protected getFormControls():Controls<IBarrio>{
    return{
      nombre_barrio: new FormControl()
    }
  }
  



}
