import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { GrsdeFotosAnimaisComponent } from './grsde-fotos-animais/grsde-fotos-animais.component';


@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GrsdeFotosAnimaisComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule
  ]
})
export class AnimaisModule { }
