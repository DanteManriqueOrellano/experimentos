import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { Controls,subformComponentProviders, DataInput, NgxRootFormComponent } from 'ngx-sub-form';
import { IDepartamento } from './IDepartamento';
import { FormControl, FormArray } from '@angular/forms';

import { IProvincia } from '../provincia-form/IProvincia';



@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css'],
  providers:subformComponentProviders(DepartamentoFormComponent)
})
export class DepartamentoFormComponent extends NgxRootFormComponent<IProvincia[], IDepartamento> {
  
  
  @DataInput()
  @Input('ubigeo')
  public dataInput: Required<IProvincia[]>  | null | undefined;

  @Output('listingUpdated')
  public dataOutput: EventEmitter<IProvincia[]> = new EventEmitter();
  
  @Output('eliminaUbigeoOutput')
  public eliminaUbigeoOutput: EventEmitter<string> = new EventEmitter();
 
  @Output('crearUbigeoOutput')
  public crearUbigeoOutput: EventEmitter<IDepartamento> = new EventEmitter();

  protected getFormControls():Controls<IDepartamento>{
    return{
     
     nombre_dep: new FormControl(),
     provincias: new FormArray([])
    }
  }
 
  public agregarProvincia(){
    this.formGroupControls.provincias.push(new FormControl())

  }
  public eliminarProvincia(index: number): void{
    this.formGroupControls.provincias.removeAt(index)
  }
  public ubigeoDeleted(){

    this.eliminaUbigeoOutput.emit('')

  }
  public ubigeoCreated(){
    //console.log(this.formGroupValues)
    
    this.crearUbigeoOutput.emit(this.formGroupValues)
  }
 
  
  
}
