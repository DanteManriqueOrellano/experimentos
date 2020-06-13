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
  "d":{"d_uno":'chupi'},
  f:{fType:FType.DOS,f_comun:'miderda'},
  g:{g1:{atributoPrincipal:'comun 1'},g2:{atributoPrincipal:"comun 2"}},
  h:{h_uno:'hola',j:{j_uno:'un j'}},
  departamemnto: {
    nombre_departamento: 'puno',
    provincia: {
      nombre_provincia: "puno 01",
      distrito: {
        nombre_distrito: "puno 01 01",
        cacerios:[{
          nombre_cacerio:"puno 01 02 01",
          centros_poblados:[
            {nombre_centro_poblado:"puno 01 02 30"},
            {nombre_centro_poblado:"puno 01 02 03 04"}
          ]
        },{
          nombre_cacerio:"puno 02",
          centros_poblados:[
            {nombre_centro_poblado:"puno 02 03"},
            {nombre_centro_poblado:"puno 01 02"}
          ]}
        ]
      }
    }

  }
  
  
}

export const dataIA:IA = {
  "a1": {
    "a_uno": "fast"
  },
  "a2": {
    "a_dos": "foot"
  }
}
