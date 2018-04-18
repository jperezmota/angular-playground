import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import "rxjs/Rx";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService){}

  storesRecipe(){
    const token = this.authService.getToken(); // Used for approach 1 - 3
    // const headers = new HttpHeaders().set('Authorization', 'yourTokenHere.');

    //Approach 1: Sending a PUT very simple without any headers, etc.
    // return this.httpClient.put('https://ng-recipe-app-50be4.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());

    //Approach 2: Sending de PUT with more data like headers, params in the third argument.
    // return this.httpClient.put('https://ng-recipe-app-50be4.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });

    //Approach 3: Recommended to use for uploading or download files, because it reports the progress.
    // const req = new HttpRequest('PUT', 'https://ng-recipe-app-50be4.firebaseio.com/recipes.json',
    //                             this.recipeService.getRecipes(),
    //                             {
    //                               reportProgress: true,
    //                               params: new HttpParams().set('auth', token)
    //                             });

    //Approach 4: Sending a put without query params here but using the interceptor shared/auto.interceptor.ts
    const req = new HttpRequest('PUT', 'https://ng-recipe-app-50be4.firebaseio.com/recipes.json',
                                this.recipeService.getRecipes(),
                                {
                                  reportProgress: true
                                });

    return this.httpClient.request(req);
  }

  getRecipes(){
    const token = this.authService.getToken();// Used for approach 1 or 2.

    //Approach 1: Sending a GET very simple without any headers, etc.
    // return this.httpClient.get('https://ng-recipe-app-50be4.firebaseio.com/recipes.json?auth=' + token).

    // //Approach 2: Sending a get passing a third object and using de generic.
    // return this.httpClient.get<Recipe[]>('https://ng-recipe-app-50be4.firebaseio.com/recipes.json?auth=' + token, {
    //                                                                                                               observe: 'body',
    //                                                                                                               responseType: 'json'
    //                                                                                                               }
    //Approach 3: Sending a get without query params here but using the interceptor shared/auto.interceptor.ts
    return this.httpClient.get<Recipe[]>('https://ng-recipe-app-50be4.firebaseio.com/recipes.json', {
                                                                                                    observe: 'body',
                                                                                                    responseType: 'json'
                                                                                                    }
  ).
    map(
      // Approach 1: Related to approach 1 above.
      // (recipes: Recipe[])=>{

      //Approach 2: Related to approach 2 above.
      (recipes)=>{
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
