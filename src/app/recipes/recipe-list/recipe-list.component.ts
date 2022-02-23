import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test description', 'https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796_960_720.jpg'),
    new Recipe('A test recipe', 'test description', 'https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796_960_720.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
