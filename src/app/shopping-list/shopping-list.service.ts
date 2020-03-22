import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService
{
    ingredieants:Ingredient[] = [
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",5)
      ];
    
    changedIngrdients= new EventEmitter<Ingredient[]>();
    
    
    getIngrdients()
    {
        return this.ingredieants.slice();
    }
    ingredientAdded(ingredient:Ingredient)
  {
    this.ingredieants.push(ingredient);
    this.changedIngrdients.emit(this.ingredieants.slice());
  }
}