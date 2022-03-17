import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
 
  constructor() { }

   private recipes: Recipe[] = [
     new Recipe('A Greek salad', 'yummy', 'https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093_960_720.jpg', [
        new Ingredient('Cherry Tomatoes', 7),
        new Ingredient('Cucumber', 1),
        new Ingredient('Olives', 5),
        new Ingredient('Onion', 1),
        new Ingredient('Olive oil', '2 tbs')
     ]),
     new Recipe('Burger', 'delicious joy', 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg', [
       new Ingredient('Buns', 2),
       new Ingredient('Meat', 1),
       new Ingredient('Onion', '3 slices'),
       new Ingredient('Tomato', '2 slices'),
       new Ingredient('Chesse', '2 slices'),
       new Ingredient('Pickled cucumber', '2 small ones/4 slices'),
     new Ingredient('Ketchup / Mayo / Barbecue souce', 1)])
   ];
  
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addREcipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
     this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  
}
