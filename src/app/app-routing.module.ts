import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';


const routes: Routes = [
  { path: '', component: BaseComponent,
    children: [
      { path : '', redirectTo: 'cocktails', pathMatch: 'full' },
      { path: 'cocktails', component: CocktailsComponent },
      {path: 'cocktail/:id', component: CocktailComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
