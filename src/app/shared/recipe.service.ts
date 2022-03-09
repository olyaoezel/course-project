import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

   private recipes: Recipe[] = [
    new Recipe('A test recipe', 'test description', 'https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796_960_720.jpg'),
    new Recipe('Another recipe', 'test description', 'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg' )
   ];
  
  getRecipes() {
    return this.recipes.slice();
  }
}
