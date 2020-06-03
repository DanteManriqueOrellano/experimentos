import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders, NgxSubFormRemapComponent, NgxRootFormComponent, DataInput } from 'ngx-sub-form';
import { IA } from 'src/app/a/aroot/aroot.component';
import { FormControl } from '@angular/forms';
import { IAB } from 'src/app/c/ab/ab.component';


interface IE {
  nuevo_IA:IA;
}

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css'],
  providers:subformComponentProviders(EComponent),
})
export class EComponent extends NgxRootFormComponent<IA,IE>  {
  
  @DataInput()
  @Input('dataIA')
  
  dataInput: Required<IA>;
  dataOutput: EventEmitter<IA> = new EventEmitter();


  protected getFormControls():Controls<IE>{
    
    return {
      nuevo_IA: new FormControl(),

    
    }
  }

  protected transformToFormGroup(obj:IA):IE{
    return{
      nuevo_IA: !obj ? null : obj
    }

  }
  protected transformFromFormGroup(formvalue: IE):IA{
    return formvalue.nuevo_IA
  }
  

}