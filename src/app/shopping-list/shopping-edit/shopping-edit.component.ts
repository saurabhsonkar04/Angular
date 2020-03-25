import { Component, OnInit, ViewChild ,OnDestroy} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit  , OnDestroy{
  subscription:Subscription;
  editMode:boolean=false;
  index:number;
  ingredient:Ingredient;
  @ViewChild('f', {static: false}) form:NgForm;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.editIngrdient.subscribe(
      (i:number) => {
        this.editMode= true;
        this.index = i;
        this.ingredient = this.shoppingService.getIngredient(i);
        this.form.setValue({
          name: this.ingredient.name,
          amount :this.ingredient.amount
        });
      }
    );
  }

  addOnSubmit(form:NgForm)
  {
   //this.addIngrdient.emit(ingredient);
   const ingredient = new Ingredient(form.value.name,form.value.amount);
       
   if(this.editMode)
    {
      this.shoppingService.updateIngredient(this.index,ingredient)
    }
    else
    {
      this.shoppingService.ingredientAdded(ingredient);
      
    }
    this.editMode=false;
    form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.closed;
    
  }
  ngOnSubmit()
  {
    this.editMode=false;
    this.form.reset();
  }
  deleteIngrdient()
  {
    this.shoppingService.deleetIngredient(this.index);
    this.clearIngredient();
  }

  clearIngredient()
  {
    this.editMode=false;
    this.form.reset();
  }
}
