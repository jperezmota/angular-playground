import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){

    /*
    1st Aproach: Iterate and add them. But we can also follow the 2nd aproach below.
    */
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    /*
      2nd Aproach: Use Spread operator that is a feature of ES6. It converts an Array of elements to a List of elements.
    */
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
