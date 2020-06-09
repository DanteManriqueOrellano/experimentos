import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EComponent } from '../e/e/e.component';
import { ContenedoreComponent } from '../e/contenedore/contenedore.component';
import { UbigeoContainerComponent } from '../ubigeo/ubigeo-container/ubigeo-container.component';


const routes: Routes = [
  {path:"independiente",component: ContenedoreComponent},
  {path:'ubigeo',component:UbigeoContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRoutingModule { }
