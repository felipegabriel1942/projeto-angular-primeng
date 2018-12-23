import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path:  '', 
    component: UsuarioComponent
  } 
];

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }