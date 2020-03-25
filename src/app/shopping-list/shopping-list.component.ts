import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  ingredieants:Ingredient[];
  private subsciption : Subscription;
  constructor(private shoppingService:ShoppingListService) { }
  

  ngOnInit() {
    
    this.ingredieants = this.shoppingService.getIngrdients();
    this.subsciption = this.shoppingService.changedIngrdients.subscribe(
      (ingredieants : Ingredient[]) => {  this.ingredieants = ingredieants }
    )

  }
  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }
  
  editingIngredient(index)
  {
    this.shoppingService.editIngrdient.next(index);
  }

}
