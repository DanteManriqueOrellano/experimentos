import { Injectable } from '@angular/core';
import { IDepartamento } from './editor/departamento/departamento.component';
import { IUbigeo } from './editor/editor.component';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {



 
}

export const ubigeoData: IUbigeo[] = [
    {
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
}]