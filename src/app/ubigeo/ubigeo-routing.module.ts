import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { UbigeoComponent } from './ubigeo/ubigeo.component';
import { NuevoComponent } from './nuevo/nuevo.component';


const routes: Routes = [
  {path:"",component:ListaComponent,
      children:[
        {path:":docId/editar",component:UbigeoComponent}
      ]},
  {path:"nuevo",component: NuevoComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbigeoRoutingModule{}
