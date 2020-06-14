import { Injectable, ɵConsole } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IUbigeo } from './editor/editor.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

 private ubigeosData$:Observable<IUbigeo[]>;
 private ubigeoCollection:AngularFirestoreCollection<IUbigeo>;
 private ubigeoDocument:AngularFirestoreDocument<IUbigeo>;

 constructor(private readonly afs: AngularFirestore){
    this.ubigeoCollection = this.afs.collection<IUbigeo>('ubigeos');
    this.ubigeosData$ = this.ubigeoCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as IUbigeo;
          const docId = a.payload.doc.id;
          return { docId, ...data };
        }))
      );
 }
 
 obtenUbigeos():Observable<IUbigeo[]>{
     return this.ubigeosData$
 }
 obtenUnUbigeoPorDocId(docId: string){
     this.ubigeoDocument = this.afs.collection('ubigeos').doc(docId);
     return this.ubigeoDocument.valueChanges();
}
 obtenDocId(){
     return this.afs.createId();
 }
 creaUbigeo(ubigeoData:IUbigeo){
     let ubigeos = this.obtenUbigeos()
     ubigeos.subscribe((val)=>{

     })
     this.ubigeoCollection.doc(ubigeoData.docId).set(ubigeoData)
 }
 actualizaUbigeo(ubigeoData:IUbigeo){    
    this.afs.collection("ubigeos").doc(ubigeoData.docId).update(ubigeoData);
 }
 eliminaUbigeo(ubigeoDataId:string){
    this.afs.collection("ubigeos").doc(ubigeoDataId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
 }
}

/*export const ubigeoData: IUbigeo[] =
    [
        {
            docId: "01",
            departamento: {
                nombre_departamento: 'ANCASH',
                
                provincias: [
                {
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
        {
            docId: "02",
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

    ]*/