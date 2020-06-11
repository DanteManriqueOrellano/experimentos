import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EComponent } from '../e/e/e.component';
import { ContenedoreComponent } from '../e/contenedore/contenedore.component';



const routes: Routes = [
  {path:"independiente",component: ContenedoreComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRoutingModule { }
