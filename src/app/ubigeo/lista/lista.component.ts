import { Component, OnInit } from '@angular/core';
import { UbigeoService } from '../ubigeoService';
import { Observable } from 'rxjs';
import { IUbigeo } from '../editor/editor.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent   {
  ubigeosData$:Observable<IUbigeo[]> = this.ubigeoService.obtenUbigeos()

  constructor(private ubigeoService: UbigeoService) { }

  eliminarUbigeo(id){
    this.ubigeoService.eliminaUbigeo(id);

  }

 
}
