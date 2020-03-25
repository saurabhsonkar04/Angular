import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService
{
    recipes:Recipe[] = [new Recipe("A Sahi Paneer recipe",
    "https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg",
    "This is the recipe desc",
    [new Ingredient('Paneer',2),new Ingredient('Gravy',3),new Ingredient('SahiPannerMasala',1)]),
  new Recipe("A Pizza recipe",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/3/1/FN_Healthy-Keri-Glassman-Chickpea-Crust-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1422369528666.jpeg",
  "This is the recipe desc",
  [new Ingredient('Base',1),new Ingredient('Tomatoes',3),new Ingredient('Cheese',3)])];
    
  updateRecipeList = new Subject<Recipe[]>();

  getRecipes()
  {
    return this.recipes.slice();
  }
  getRecipe(index:number)
  {
   return this.recipes[index];
  }
  addIngrdients(index,ingredient:Ingredient)
  {
    this.getRecipe(index).ingredients.push(ingredient);
    this.updateRecipeList.next(this.recipes.slice());
  }
  addRecipe(recipe)
  {
    this.recipes.push(recipe);
    this.updateRecipeList.next(this.recipes.slice());
  }
  updateRecipe(index,recipe)
  {
    this.recipes[index]=recipe;
    this.updateRecipeList.next(this.recipes.slice());
  }
  deleteIngredient(recipeIndex,ingredientIndex)
  {
    this.recipes[recipeIndex].ingredients.splice(ingredientIndex,1);
    this.updateRecipeList.next(this.recipes.slice());
  }
  deleteRecipe(index)
  {
    this.recipes.splice(index,1);
    this.updateRecipeList.next(this.recipes.slice());
  }
  setRecipes(recipes)
  {
    this.recipes = recipes;
    this.updateRecipeList.next(this.recipes.slice());
  }
}