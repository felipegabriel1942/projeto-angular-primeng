import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EstadosComponent } from './estados.component';


const routes: Routes = [
  {
    path:  '', 
    component: EstadosComponent
  }
];

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class EstadosRoutingModule { }
