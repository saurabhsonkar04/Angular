import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredieants:Ingredient[];
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    
    this.ingredieants = this.shoppingService.getIngrdients();
    this.shoppingService.changedIngrdients.subscribe(
      (ingredieants : Ingredient[]) => {  this.ingredieants = ingredieants }
    )
  }

  

}
