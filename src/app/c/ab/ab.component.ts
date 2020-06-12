import { Component,EventEmitter, Input } from '@angular/core';
import { NgxRootFormComponent, DataInput, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IA } from '../../a/aroot/aroot.component';
import { IB } from '../../b/broot/broot.component';
import { FormControl } from '@angular/forms';
import { ID } from 'src/app/d/d/d.component';
import { IF } from 'src/app/f/f/f.component';
import { IG } from 'src/app/g/g/g.component';
import { IH } from 'src/app/h/h/h.component';
import { IDepartamento } from 'src/app/ubigeo/editor/departamento/departamento.component';


export interface IAB{
  aba:IA;
  abb:IB;
  d:ID;
  f:IF;
  g:IG;
  h:IH;
  departamemnto:IDepartamento
  

}
@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css'],
  providers:subformComponentProviders(AbComponent)
})
export class AbComponent extends NgxRootFormComponent<IAB> {
  @DataInput()
  @Input('ab$')
  dataInput: Required<IAB>;
  dataOutput: EventEmitter<IAB> = new EventEmitter();
  protected getFormControls(): Controls<IAB> {
    return {
      aba: new FormControl(),
      abb: new FormControl(),
      d: new FormControl(),
      f: new FormControl(),
      g: new FormControl(),
      h: new FormControl(),
      departamemnto:new FormControl()
    }
  }
}
