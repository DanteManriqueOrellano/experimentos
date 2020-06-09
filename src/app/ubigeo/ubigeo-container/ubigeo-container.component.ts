import { Component, AfterViewInit } from '@angular/core';
import { subformComponentProviders, NullableObject } from 'ngx-sub-form';
import { Observable, of } from 'rxjs';
import { IDepartamento } from '../departamento-form/IDepartamento';

import { map, switchMap } from 'rxjs/operators';
import { UbigeoService } from '../ubigeo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubigeo-container',
  templateUrl: './ubigeo-container.component.html',
  styleUrls: ['./ubigeo-container.component.css'],
  providers: subformComponentProviders(UbigeoContainerComponent)
})
export class UbigeoContainerComponent {

  constructor(
    private apiUbigeo: UbigeoService,
    private route: ActivatedRoute,

  ) { }

  public ubigeo$: Observable<NullableObject<IDepartamento>> = this.route.paramMap.pipe(
    map(params => {
      const id = params.get('id');
      return id
    }),
    switchMap(id => {
      if (id === 'nuevo' || !id) {
        return of(null);
      }
      this.apiUbigeo.id = id
      return this.apiUbigeo.obtenerUnUbigeo(id)
    }

    ),
    map((ubigeo) => ubigeo ? ubigeo : this.ubigeoVacio())

  )

  private ubigeoVacio(): NullableObject<IDepartamento> {

    return {
      nombre_dep: null,
      provincias: [{ nombre_provincia: null, distritos: [] }]
    };
  }
  public upsertListing(ubigeo: IDepartamento): void {
  
    this.apiUbigeo.actualizaUbigeo(ubigeo,this.apiUbigeo.id);

  }

  public eliminaUbigeoOutput($evnt): void {

    this.apiUbigeo.eliminarUnUbigeo(this.apiUbigeo.id)
  }

  public crearUbigeoOutput(departamento: IDepartamento): void {
    this.apiUbigeo.crearUbigeo(departamento)
  }


}
