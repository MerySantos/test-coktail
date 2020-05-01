import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail, CocktailDrink } from '../../models/cocktail';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.sass']
})
export class CocktailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public cocktailService: CocktailsService,
    private location: Location ) { }

  id: number;
  cocktailData: Cocktail;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(Number( params.get('id') ));
      this.id = Number( params.get('id') );

    });

    this.cocktailService.getCocktailById(this.id).subscribe(
      (cocktailDrink: CocktailDrink) => this.cocktailData = cocktailDrink.drinks[0]);
    }

    back() {
      this.location.back();
    }

}
