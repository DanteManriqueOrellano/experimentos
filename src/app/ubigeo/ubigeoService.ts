import { Injectable } from '@angular/core';
import { IDepartamento } from './editor/departamento/departamento.component';
import { IUbigeo } from './editor/editor.component';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

 private ubigeoData$:BehaviorSubject<IUbigeo[]> = new BehaviorSubject(ubigeoData)

 obtenUbigeos(){
     return this.ubigeoData$
 }
 obtenUnUbigeoPorDocId(docId: string){
     console.log(docId)
    let  ubigeoData$:BehaviorSubject<IUbigeo> = new BehaviorSubject(ubigeoData[0])
    return  ubigeoData$
 }
 obtenDocId(){
     return "03"
 }
 creaUbigeo(ubigeoData:IUbigeo){
     console.log(ubigeoData)

 }

 
}

export const ubigeoData: IUbigeo[] = 
    [
        {docId:"01",
            departamento: {
                nombre_departamento: 'ANCASH',
                provincia: {
                    nombre_provincia: "HUARAZ",
                    distrito: {
                        nombre_distrito: "INDEPENDENCIA",
                        cacerios: [{
                            nombre_cacerio: "HUANCHAC",
                            centros_poblados: [
                                { nombre_centro_poblado: "MARIAN" },
                                { nombre_centro_poblado: "CURHUAS" }
                            ]
                        }, {
                            nombre_cacerio: "CAURURU",
                            centros_poblados: [
                                { nombre_centro_poblado: "PONGOR" },
                                { nombre_centro_poblado: "PUMACAYAN" }
                            ]
                        }
                        ]
                    }
                }
            }
        },
        {docId:"02",
            departamento: {
                nombre_departamento: 'LA LIBERTAD',
                provincia: {
                    nombre_provincia: "TRUJILLO",
                    distrito: {
                        nombre_distrito: "SANTA MARTA",
                        cacerios: [{
                            nombre_cacerio: "PICHUCA",
                            centros_poblados: [
                                { nombre_centro_poblado: "HUACA" },
                                { nombre_centro_poblado: "CHUSPIS" }
                            ]
                        }, {
                            nombre_cacerio: "CASA BLANCA",
                            centros_poblados: [
                                { nombre_centro_poblado: "YUPASH" },
                                { nombre_centro_poblado: "TAKIS" }
                            ]
                        }
                        ]
                    }
                }
            }
        }

    ]