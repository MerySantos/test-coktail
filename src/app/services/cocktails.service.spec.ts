import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { CocktailsService } from './cocktails.service';

describe('CocktailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CocktailsService]
  }));

  it('should be created', () => {
    const service: CocktailsService = TestBed.get(CocktailsService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: CocktailsService = TestBed.get(CocktailsService);
    expect(service.getCocktailById).toBeTruthy();
   });
});
