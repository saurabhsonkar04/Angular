import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService
{
    ingredieants:Ingredient[] = [
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",5)
      ];
    
    changedIngrdients= new Subject<Ingredient[]>();
    editIngrdient = new Subject<number>();
    
    getIngrdients()
    {
        return this.ingredieants.slice();
    }
    ingredientAdded(ingredient:Ingredient)
  {
    this.ingredieants.push(ingredient);
    this.changedIngrdients.next(this.ingredieants.slice());
  }
  
  getIngredient(index:number): Ingredient {
    return this.ingredieants[index];
  }
  updateIngredient(indes:number,ingr:Ingredient)
  {
    this.ingredieants[indes]= ingr;
    this.changedIngrdients.next(this.ingredieants.slice());
  }
  deleetIngredient(index:number)
  {
    var ingre:Ingredient =  this.ingredieants[index];
    this.ingredieants = this.ingredieants.filter(item => 
      item.name !== ingre.name );
    this.changedIngrdients.next(this.ingredieants.slice());
  }
}