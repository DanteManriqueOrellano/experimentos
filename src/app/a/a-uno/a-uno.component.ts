import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from "ngx-sub-form";
import { FormControl } from '@angular/forms';
import { IUbigeo_seleccionado } from 'src/app/ubigeo/seleccionado/seleccionado.component';

export interface IA1 {
  a_uno:string;
  
}

@Component({
  selector: 'app-a-uno',
  templateUrl: './a-uno.component.html',
  styleUrls: ['./a-uno.component.css'],
  providers: subformComponentProviders(AUnoComponent)
})
export class AUnoComponent extends NgxSubFormComponent<IA1> {

  protected getFormControls():Controls<IA1>{
    return {
      a_uno: new FormControl(),
      
    }
  }


}
