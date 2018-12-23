import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component';
import { EstadosRoutingModule } from './estados.routing.module';

@NgModule({
  imports: [
    CommonModule,
    EstadosRoutingModule
  ],
  declarations: [EstadosComponent]
})
export class EstadosModule { }
