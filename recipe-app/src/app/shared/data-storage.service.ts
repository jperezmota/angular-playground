import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";
import "rxjs/Rx";

@Injectable()
export class DataStorageService{

  constructor(private http: Http, private recipeService: RecipeService){}

  storesRecipe(){
    return this.http.put('https://ng-recipe-app-50be4.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes(){
    return this.http.get('https://ng-recipe-app-50be4.firebaseio.com/recipes.json').
    map(
      (response: Response)=>{
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes){
            if(!recipe['ingredients']){
                 console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
      }
    ).
    subscribe(
      (recipes: Recipe[])=>{
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
