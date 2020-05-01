import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CategoriesList } from '../models/categories';
import { GlassesList } from '../models/glasses';
import { IngredientsList } from '../models/ingredients';
import { AlcoholicList } from '../models/alcoholic';
import { CocktailsFilter, Cocktail, CocktailDrink, CocktailFilter } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  //#region List Filters

  getListCategories(): Observable<CategoriesList> {
    return this.http.get<CategoriesList>(`${environment.endpoint}/list.php?c=list`);
  }

  getListGlasses(): Observable<GlassesList> {
    return this.http.get<GlassesList>(`${environment.endpoint}/list.php?g=list`);
  }

  getListIngredients(): Observable<IngredientsList> {
    return this.http.get<IngredientsList>(`${environment.endpoint}/list.php?i=list`);
  }

  getListAlcoholic(): Observable<AlcoholicList> {
    return this.http.get<AlcoholicList>(`${environment.endpoint}/list.php?a=list`);
  }


  //#endregion

  //#region Filter
  getCocktailsFilter(filter: string, option: string): Observable<CocktailsFilter> {
    return this.http.get<CocktailsFilter>(`${environment.endpoint}/filter.php?${option}=${filter}`);
  }

  getCocktailById(id: number): Observable<CocktailDrink>{
    return this.http.get<CocktailDrink>(`${environment.endpoint}/lookup.php?i=${id}`);
  }
  //#endregion

  // #region Test
  mockServiceCocktailFilter(){
    let data: CocktailFilter;
    data= {
      strDrink: 'Test1',
      strDrinkThumb: 'Test1',
      idDrink: 123,
    }
    return data;
  }
  //#endregion
}

