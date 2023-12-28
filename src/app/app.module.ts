import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisListComponent } from "./crisis-list/crisis-list.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CrisisListComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
