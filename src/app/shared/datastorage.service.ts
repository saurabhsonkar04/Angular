import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorage
{
     httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      }
    constructor(private http:HttpClient,
        private recipeServies:RecipeService){}
        private url = "https://shopping-cart-9e5e2.firebaseio.com/recipes.json";
    storeRecipes()
    {
       return  this.http.put(this.url,this.recipeServies.getRecipes());
    }

    fetchRecipes() 
    {
        return this.http.get<Recipe[]>(this.url,this.httpOptions).subscribe(
            (resp) => {this.recipeServies.setRecipes(resp)}
        );
    }
    private extractData(res: Response) {
        let body = res;
        return body || {};
      }
}