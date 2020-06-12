import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"ubigeo",loadChildren:()=>import('../ubigeo/ubigeo.module').then(m=>m.UbigeoModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRoutingModule { }
