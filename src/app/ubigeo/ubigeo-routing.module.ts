import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { UbigeoComponent } from './ubigeo/ubigeo.component';


const routes: Routes = [
  {path:"",component:ListaComponent,children:[{path:":docId/editar",component:UbigeoComponent}]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbigeoRoutingModule{}
