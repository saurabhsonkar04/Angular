import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService
{
    recipes:Recipe[] = [new Recipe("A Sahi Paneer recipe",
    "This is the recipe desc",
    "https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg",
    [new Ingredient('Paneer',2),new Ingredient('Gravy',3),new Ingredient('SahiPannerMasala',1)]),
  new Recipe("A Pizza recipe",
  "This is the recipe desc",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1422369528666.jpeg",
  [new Ingredient('Base',1),new Ingredient('Tomatoes',3),new Ingredient('Cheese',3)])];
    
  selectedRecipe  = new EventEmitter<Recipe>();
  getRecipes()
  {
    return this.recipes.slice();
  }

}