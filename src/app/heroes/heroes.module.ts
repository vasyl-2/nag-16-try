import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import {HeroListComponent} from "./hero-list/hero-list.component";
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [HeroListComponent, HeroDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
