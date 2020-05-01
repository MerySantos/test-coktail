import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailFilterComponent } from './cocktail-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CocktailsService } from '../../../services/cocktails.service';
import { CocktailFilter } from 'src/app/models/cocktail';
import { Cocktail } from '../../../models/cocktail';

describe('CocktailFilterComponent', () => {
  let component: CocktailFilterComponent;
  let fixture: ComponentFixture<CocktailFilterComponent>;
  let data: CocktailFilter;

  beforeEach(async(() => {


    TestBed.configureTestingModule({
      declarations: [ CocktailFilterComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    data = {
      strDrink: 'Test1',
      strDrinkThumb: 'Test1',
      idDrink: 123,
    };
    fixture = TestBed.createComponent(CocktailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




});
