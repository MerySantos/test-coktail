import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FiltersComponent } from '../../components/cocktails/filters/filters.component';
import { CocktailFilter, CocktailsFilter } from '../../models/cocktail';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.sass']
})
export class CocktailsComponent implements OnInit, AfterViewInit {

  cocktailFilter: CocktailFilter[];
  @ViewChild('listFilter', {static: false}) listFilter: FiltersComponent;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.showCocktailsFilter();
  }

  showCocktailsFilter(): void {
    this.listFilter.emitEvent.subscribe((data: CocktailFilter[]) => {
      this.cocktailFilter = data;
    });
  }




}
