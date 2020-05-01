import { Component, OnInit, Input } from '@angular/core';
import { CocktailFilter } from '../../../models/cocktail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-filter',
  templateUrl: './cocktail-filter.component.html',
  styleUrls: ['./cocktail-filter.component.sass']
})
export class CocktailFilterComponent implements OnInit {

  @Input ('dataCocktail')
  set strCocktail(value: CocktailFilter) {
    this.cocktail = value;
  }

  cocktail: CocktailFilter;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailCocktail(idCocktail: number) {
    // console.log(id);
    this.router.navigate(['/cocktail',  idCocktail] );

  }


}
