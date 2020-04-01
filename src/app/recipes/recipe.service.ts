import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class RecipeService
{
    recipes:Recipe[]=null;
    
  updateRecipeList = new Subject<Recipe[]>();

  getRecipes()
  {
    if(this.recipes!=null)
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
  deleteRecipe(index)
  {
    this.recipes.splice(index,1);
    this.updateRecipeList.next(this.recipes.slice());
  }
  setRecipes(recipes)
  {
    console.log(recipes)
    this.recipes = recipes;
    this.updateRecipeList.next(this.recipes.slice());
  }
}