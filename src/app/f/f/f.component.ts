import { Component,EventEmitter, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls, NgxRootFormComponent, DataInput, NgxSubFormRemapComponent } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { IF_uno } from '../if-uno/if-uno.component';
import { IF_dos } from '../if-dos/if-dos.component';

export enum FType {
  UNO="Uno",
  DOS = "Dos"
}

export interface IBaseF{
  f_comun:string;
}
export type IF = IF_uno | IF_dos

interface IFForm{
  f_uno:IF_uno;
  f_dos:IF_dos;
  fType:FType;
}

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.css'],
  providers:subformComponentProviders(FComponent)
})
export class FComponent extends NgxRootFormComponent<IF,IFForm>{
  
  @DataInput()
  dataInput: Required<IF_uno> | Required<IF_dos>;
  dataOutput: EventEmitter<IF>;
  

  public FType = FType;
  

  protected getFormControls():Controls<IFForm>{
    return {
      f_uno:new FormControl(),
      f_dos:new FormControl(),
      fType: new FormControl()
    }
  }

  protected transformToFormGroup(obj:IF):IFForm{
    if (!obj) {
      return null;
    }
    
    return {
      f_uno: obj.fType === FType.UNO ? obj : null,
      f_dos: obj.fType === FType.DOS ? obj : null,
      fType: obj.fType,
    
    };
  }
  protected transformFromFormGroup(formValue:IFForm):IF{
    
    switch (formValue.fType){
      case FType.UNO:
        return formValue.f_uno;
      case FType.DOS:
        return formValue.f_dos
    }
  }
}
