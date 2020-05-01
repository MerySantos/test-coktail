import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { FiltersComponent } from './components/cocktails/filters/filters.component';
import { CocktailFilterComponent } from './components/cocktails/cocktail-filter/cocktail-filter.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CocktailsComponent,
    FiltersComponent,
    CocktailFilterComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
