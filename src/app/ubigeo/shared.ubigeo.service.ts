import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { DepartamentoId } from './ubigeo.service';
import { IDepartamento } from './departamento-form/IDepartamento';
@Injectable({
  providedIn: 'root'
})
export class SharedUbigeoService {

  public departamentos: Observable<DepartamentoId[]>;
  public id: string = null;
  private departamentoCollection: AngularFirestoreCollection<IDepartamento>;
  private departamentoDocument: AngularFirestoreDocument<IDepartamento>

  constructor(private readonly afs: AngularFirestore) {
    this.departamentoCollection = this.afs.collection<IDepartamento>('ubigeos');
    this.departamentos = this.departamentoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDepartamento;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  public crearUbigeo(departamento: IDepartamento) {
    return this.departamentoCollection.add(departamento)
  }
  public ListarUbigeos(): Observable<IDepartamento[]> {
    return this.departamentos
  }
  public obtenerUnUbigeo(docId: string) {
    this.departamentoDocument = this.afs.collection('ubigeos').doc(docId);
    return this.departamentoDocument.valueChanges();
  }

  public actualizaUbigeo(ubigeo: IDepartamento, docId: string): void {

    this.departamentoCollection.doc(docId).set(ubigeo).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }
  public eliminarUnUbigeo(idUbigeo: string): void {
    this.departamentoCollection.doc(idUbigeo).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}
