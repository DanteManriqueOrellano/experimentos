import { Component, OnInit, Input } from '@angular/core';
import { IDepartamento } from '../departamento-form/IDepartamento';
import { UbigeoService, DepartamentoId } from '../ubigeo.service';

@Component({
  selector: 'app-main-ubigeo',
  templateUrl: './main-ubigeo.component.html',
  styleUrls: ['./main-ubigeo.component.css']
})
export class MainUbigeoComponent  {
  
  @Input('ubigeos')
  public ubigeos: DepartamentoId[] 

}
