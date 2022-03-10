import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(){
  }

  onAddToShoppingList() {
    this.shoppingService.addIngredientsToShoppingList(this.recipe.ingredients);
  
  }

}
