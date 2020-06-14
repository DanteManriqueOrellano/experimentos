import { Component, OnInit } from '@angular/core';
import { UbigeoService } from '../ubigeoService';
import { Observable } from 'rxjs';
import { IUbigeo } from '../editor/editor.component';
import { FormControl,FormArray } from '@angular/forms';
import { NgxSubFormComponent,Controls, subformComponentProviders } from 'ngx-sub-form';
import { IProvincia } from '../editor/provincia/provincia.component';
import { IDistrito } from '../editor/distrito/distrito.component';
import { ICacerio } from '../editor/cacerio/cacerio.component';
import { ICentroPoblado } from '../editor/centro-poblado/centro-poblado.component';
import { IDepartamento } from '../editor/departamento/departamento.component';
export interface IUbigeo_seleccionado {
  cacerios: string[]
  centros_poblados: string[]
  departamento: string
  distrito: string
  provincia: string
}
@Component({
  selector: 'app-seleccionado',
  templateUrl: './seleccionado.component.html',
  styleUrls: ['./seleccionado.component.css'],
  providers:subformComponentProviders(SeleccionadoComponent)
})
export class SeleccionadoComponent extends NgxSubFormComponent<IUbigeo_seleccionado>   {
  public depId:number = 0;
  public proId:number = 0;
  public disId:number = 0;
  public casId:number = 0;
  public cpId:number = 0;
  public aneId:number = 0;
  public barId:number = 0;

  public dataDepartamentos:IDepartamento[];
  public dataProvincias:IProvincia[];
  public dataDistrito:IDistrito[];
  public dataCaserio:ICacerio[];
  public dataCp:ICentroPoblado[];
  public selectedValue:string[]
  

  
 
  public departamentos$:Observable<IUbigeo[]> = this.ubigeoService.obtenUbigeos()
  constructor(private ubigeoService:UbigeoService) { super()}
  protected getFormControls():Controls<IUbigeo_seleccionado>{
    return {
      cacerios: new FormControl(),
      centros_poblados: new FormControl(),
      departamento: new FormControl(),
      distrito: new FormControl(),
      provincia: new FormControl(),
    }
  }
  setIndiceDepartamento(depId){
    this.depId = depId
    this.departamentos$.subscribe((val)=>{
      this.dataProvincias = val[this.depId].departamento.provincias
    })
  }
  setIndiceProvincia(proId){
    this.proId=proId
    this.departamentos$.subscribe((val)=>{this.dataDistrito = val[this.depId].departamento.provincias[proId].distritos})
  }
  setIndiceDistrito(disId){
    this.disId=disId
    this.departamentos$.subscribe((val)=>{this.dataCaserio=val[this.depId].departamento.provincias[this.proId].distritos[disId].cacerios})
  }
  setIndiceCacerio(casId:any) {
    this.departamentos$.subscribe((val) => {
      let Arreglo: number[] = [99]
      let index: any[] = this.formGroupControls.cacerios.value
      //busca un elemento segun el index
      if (index !== null) {
        
      index.map((val) => {
        Arreglo.map((elemento) => {
          if (elemento === val.id) {//existe, por lo tanto elimina al elemento del arreglo
            Arreglo.slice[val.id, val.id]
          }
          else {//agrega al arreglo
            Arreglo.push(val.id)
          }
        })
      })


      }

      let sinRepetidos = [...new Set(Arreglo)]//elimina elelentos repetidos de tipos primitivos


      let cas: any[] = [{ 'cp': 'nada', 'id': 98 }]


      for (let index = 1; index < sinRepetidos.length; index++) {
        const element = sinRepetidos[index];
        cas.map((elemento) => {
          if (elemento === sinRepetidos[index]) {
            cas.slice[sinRepetidos[index], sinRepetidos[index]]
          }
          else {
            cas.push({ 'cp': val[this.depId].departamento.provincias[this.proId].distritos[this.disId].cacerios[element].centros_poblados, 'id': element })
          }
        })
      }

      this.dataCp = cas.filter((valorActual, indiceActual, arreglo) => {
        //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
        return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
      });

      this.dataCp.shift()
    })


    
  }
  setIndiceCentroPoblado(cpId){
    this.cpId = cpId
    
    
    this.departamentos$.subscribe((val)=>
    {
      
      //this.dataAnexo =val[this.depId].provincias[this.proId].distritos[this.disId].cacerios[this.disId].cps[cpId].anexos
    })
  }/*
  setIndiceAnexo(aneId){
    this.aneId = aneId
    //this.departamentos$.subscribe((val)=>{this.dataBar =val[this.depId].provincias[this.proId].distritos[this.disId].cacerios[this.disId].cps[this.casId].anexos[aneId].barrios})
  }
  setIndiceBarrio(barId){
    //this.departamentos$.subscribe((val)=>{this.dataBar =val[this.depId].provincias[this.proId].distritos[this.proId].cacerios[this.disId].cps[this.casId].anexos[this.aneId].barrios[barId]})

  }*/

  

}
