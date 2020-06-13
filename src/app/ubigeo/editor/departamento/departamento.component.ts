import { Component } from '@angular/core';
import { subformComponentProviders, Controls, NgxSubFormComponent } from 'ngx-sub-form';
import { FormControl, FormArray } from '@angular/forms';
import { IProvincia } from '../provincia/provincia.component';
export interface IDepartamento {
  nombre_departamento:string;
  provincias:IProvincia[];
}
@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers:subformComponentProviders(DepartamentoComponent)
})
export class DepartamentoComponent extends NgxSubFormComponent<IDepartamento> {
  
  
  protected getFormControls():Controls<IDepartamento>{
    return {
      nombre_departamento: new FormControl(),
      provincias: new FormArray([])
    }
  }

  agregarProvincia(){
    this.formGroupControls.provincias.push(new FormControl())
  }
  eliminarProvincia(i){
    this.formGroupControls.provincias.removeAt(i)

  }
}
