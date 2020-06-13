import { Injectable } from '@angular/core';
import { IDepartamento } from './editor/departamento/departamento.component';
import { IUbigeo } from './editor/editor.component';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

 private ubigeoData$:BehaviorSubject<IUbigeo[]> = new BehaviorSubject(ubigeoData)
 public dataUbigeo:IUbigeo[]


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
                provincias: [{
                    nombre_provincia: "HUARAZ",
                    distritos: [{
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
                    }]
                },
                {
                    nombre_provincia: "CARHUAZ",
                    distritos: [{
                        nombre_distrito: "ACOPAMPA",
                        cacerios: [{
                            nombre_cacerio: "COCHAPAMPA",
                            centros_poblados: [
                                { nombre_centro_poblado: "COCHAS" },
                                { nombre_centro_poblado: "COLCAS" }
                            ]
                        }, {
                            nombre_cacerio: "ANTARACA",
                            centros_poblados: [
                                { nombre_centro_poblado: "SHANUCO" },
                                { nombre_centro_poblado: "ICHIC" }
                            ]
                        }
                        ]
                    },
                    {
                        nombre_distrito: "COPA CHICO",
                        cacerios: [{
                            nombre_cacerio: "OQUEDA",
                            centros_poblados: [
                                { nombre_centro_poblado: "SANTO TORIBIO" },
                                { nombre_centro_poblado: "MOGROVEJO" }
                            ]
                        }, {
                            nombre_cacerio: "SAN ILARION",
                            centros_poblados: [
                                { nombre_centro_poblado: "LUZURIAGA" },
                                { nombre_centro_poblado: "MAXWELL" }
                            ]
                        }
                        ]
                    },
                ]
                }
            ]
            }
        },
        {docId:"02",
            departamento: {
                nombre_departamento: 'LA LIBERTAD',
                provincias: [{
                    nombre_provincia: "TRUJILLO",
                    distritos: [{
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
                    }]
                }]
            }
        }

    ]