import { Injectable } from '@angular/core';
import { IAB } from './c/ab/ab.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AbService {

  public dataAB$:BehaviorSubject<IAB> = new BehaviorSubject(dataAB)

 
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
  "d":{"d_uno":"tu vieja"}
}

