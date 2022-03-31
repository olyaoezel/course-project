import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  map, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "./recipe.service";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) { }
    host = environment.host + 'recipes.json';
    
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.host, recipes)
            .subscribe(response => {
                console.log(response);
            })
    }

    fetchRecipes() {
        return this.http.
            get<Recipe[]>(this.host)
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }),
            tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
        );  
    }
 }