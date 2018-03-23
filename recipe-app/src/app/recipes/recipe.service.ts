import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe []= [
    new Recipe('Tasty Schnitzel',
               'A super Tasty Schnitzel just Awsome.',
               'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
               [
                 new Ingredient('Meat', 1),
                 new Ingredient('French Fries', 20)
               ]
            ),
    new Recipe('Big Fat Burger',
               'Your burger.',
               'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
               [
                 new Ingredient('Buns', 1),
                 new Ingredient('Meat', 1)
               ]
            )
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, updatedRecipe: Recipe){
    this.recipes[index] = updatedRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipe: Recipe[]){
    this.recipes = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
