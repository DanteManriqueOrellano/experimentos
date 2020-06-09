import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbigeoContainerComponent } from './ubigeo-container/ubigeo-container.component';
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';



const routes: Routes = [
  {
    path: ':id',component:UbigeoContainerComponent
  },
  {
    path: 'misubigeos/:id',component:UbigeoContainerComponent
  },
  {
    path:'nuevo',component:UbigeoContainerComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbigeoRoutingModule { }
