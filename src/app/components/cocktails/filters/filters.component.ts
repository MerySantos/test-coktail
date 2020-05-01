import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map  } from 'rxjs/operators';

import { CocktailsService } from '../../../services/cocktails.service';
import { CategoriesList, CategoryList } from '../../../models/categories';
import { GlassesList, GlassList } from '../../../models/glasses';
import { IngredientsList, IngredientList } from '../../../models/ingredients';
import { AlcoholicList, StrAlcoholicList } from '../../../models/alcoholic';
import { CocktailsFilter, CocktailFilter } from '../../../models/cocktail';
import { ThrowStmt } from '@angular/compiler';
import { RouterStateSnapshot } from '@angular/router';



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  optionCategoriesFilter: CategoryList[];
  optionGlassesFilter: GlassList[];
  optionIngredientsFilter: IngredientList[];
  optionAlcoholicFilter: StrAlcoholicList[];
  categories: FormControl;
  glasses: FormControl;
  ingredients: FormControl;
  alcoholic: FormControl;
  @Output() emitEvent: EventEmitter<CocktailFilter[]> = new EventEmitter<CocktailFilter[]>();
  searchIngredients: any;


  constructor(public cocktailService: CocktailsService) { }

  ngOnInit() {
    this.initializerForms();
    this.getFilters();
  }

  initializerForms() {
    this.categories = new FormControl('');
    this.glasses = new FormControl('');
    this.ingredients = new FormControl('');
    this.alcoholic = new FormControl('');
  }

  getFilters() {
    this.getOptionsCategoriesList();
    this.getOptionsGlassesList();
    this.getOptionsIngredientsList();
    this.getOptionsAlcoholicList();
  }

  getOptionsCategoriesList() {
    this.cocktailService.getListCategories().subscribe(
      (response: CategoriesList) => {
        this.optionCategoriesFilter = response.drinks;
      }
    );

    this.categories.valueChanges.pipe(distinctUntilChanged()).subscribe((filter: string) => {
      this.getCocktailsFilter(filter, 'c');
    });
  }

  getOptionsGlassesList() {
    this.cocktailService.getListGlasses().subscribe(
      (response: GlassesList) => this.optionGlassesFilter = response.drinks
    );

    this.glasses.valueChanges.pipe(distinctUntilChanged()).subscribe((filter: string) => {
      this.getCocktailsFilter(filter, 'g');
    });
  }

  getOptionsIngredientsList() {
    this.cocktailService.getListIngredients().subscribe(
      (response: IngredientsList) => this.optionIngredientsFilter = response.drinks
    );

    this.searchIngredients = (text$: Observable<string>) => {
      return text$.pipe(
          debounceTime(200),
          distinctUntilChanged(),
          map(term => (term.length < 2 || this.optionIngredientsFilter === undefined)
            ? []
            : this.optionIngredientsFilter.filter(option =>
                option.strIngredient1.toLowerCase().indexOf(term.toLowerCase()) > - 1 )
                . slice(0, 10)
          ),
      );
    };
  }

  getOptionsAlcoholicList() {
    this.cocktailService.getListAlcoholic().subscribe(
      (response: AlcoholicList) => {
        this.optionAlcoholicFilter = response.drinks.filter(option => option.strAlcoholic != null )
      }
    );

    this.alcoholic.valueChanges.pipe(distinctUntilChanged()).subscribe((filter: string) => {
      this.getCocktailsFilter(filter, 'a');
    });
  }


  getCocktailsFilter(filter: string, option: string) {
    this.cocktailService.getCocktailsFilter(filter, option).subscribe(
      (response: CocktailsFilter) => {
        this.emitDataFilter(response.drinks);
      }
    );
  }


  emitDataFilter(filter: CocktailFilter[]) {
    this.emitEvent.emit(filter);
  }

//#region  autocomplete
resultFormatBandListValue(value: any) {
  return value.strIngredient1;
}

inputFormatBandListValue(value: any)   {
  return value.strIngredient1;
}

selectOptionIngredients (event){
  this.getCocktailsFilter(event.item.strIngredient1, 'i');
}

//#endregion

}
