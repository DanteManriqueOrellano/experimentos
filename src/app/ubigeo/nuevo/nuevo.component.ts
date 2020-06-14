import { Component } from '@angular/core';
import { UbigeoService } from '../ubigeoService';
import { Observable } from 'rxjs';
import { IUbigeo } from '../editor/editor.component';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  ubigeosData$:Observable<IUbigeo>

  constructor(private ubigeoService: UbigeoService){}
  
  ubigeoDataUpdate($event:IUbigeo){
    $event.docId = this.ubigeoService.obtenDocId()
    this.ubigeoService.creaUbigeo($event)
  }
}
