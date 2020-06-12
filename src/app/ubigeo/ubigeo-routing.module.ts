import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { UbigeoComponent } from './ubigeo/ubigeo.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
    {path:"",component:UbigeoComponent,children:[{path:"ubigeos",component:ListaComponent},{path:"editar",component:EditorComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbigeoRoutingModule{}