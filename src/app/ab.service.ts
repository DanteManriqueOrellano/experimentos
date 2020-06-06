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
      "a_uno": "valor a_uno"
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
  "d":{"d_uno":"tu vieja"},
  f:{fType:FType.DOS,f_comun:'miderda'},
  g:{g1:{g_comun1:'comun 1'},g2:{g_comun2:"comun 2"}}
  
  
}

export const dataIA:IA = {
  "a1": {
    "a_uno": "fast"
  },
  "a2": {
    "a_dos": "foot"
  }
}
