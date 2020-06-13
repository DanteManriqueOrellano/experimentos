import { Injectable } from '@angular/core';
import { IAB } from './c/ab/ab.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IA } from './a/aroot/aroot.component';
import { FType } from './f/f/f.component';


@Injectable({
  providedIn: 'root'
})
export class AbService {

  public dataIAB$:BehaviorSubject<IAB> = new BehaviorSubject(dataAB)
  public dataIA$:BehaviorSubject<IA> = new BehaviorSubject(dataIA)

 
}

export const dataAB:IAB= 

{
  "aba": {
    "a1": {
      "a_uno": "valor a_uno",
    
    },
    "a2": {
      "a_dos": "valor a_dos"
    }
  },
  "abb": {
    "b1": {
      "b_uno": "valor b_uno"
    },
    "b2": {
      "b_dos": "valor a_dos"
    }
  },
  "d":{"d_uno":'chupi'},
  f:{fType:FType.DOS,f_comun:'miderda'},
  g:{g1:{atributoPrincipal:'comun 1'},g2:{atributoPrincipal:"comun 2"}},
  h:{h_uno:'hola',j:{j_uno:'un j'}},
  seleccionado:{departamento:'LORETO',provincia:'IQUITOS',distrito:'MALA',cacerios:['YURIMAGUAS','MAGUAS'],centros_poblados:['PATACA','ALGOMAS']}

  
}

export const dataIA:IA = {
  "a1": {
    "a_uno": "fast",
  // seleccionado:{departamento:'LORETO',provincia:'IQUITOS',distrito:'MALA',cacerios:['YURIMAGUAS','MAGUAS'],centros_poblados:['PATACA','ALGOMAS']}

  },
  "a2": {
    "a_dos": "foot"
  }
}
