import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUbigeo } from '../editor/editor.component';
import { UbigeoService } from '../ubigeoService';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, map } from 'rxjs/operators';
@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styleUrls: ['./ubigeo.component.css']
})
export class UbigeoComponent {
  ubigeosData$:Observable<IUbigeo> = this.route.paramMap.pipe(
    map(
      (param)=>param.get('docId')),
    mergeMap(
      (id:string)=>{return this.ubigeoService.obtenUnUbigeoPorDocId(id)}
    ) 
   )
  constructor(
    private ubigeoService: UbigeoService,
    private route:ActivatedRoute
    ) { }
    
    ubigeoDataUpdate(ubigeoData:IUbigeo){
      
      this.ubigeoService.actualizaUbigeo(ubigeoData)
    }
}
