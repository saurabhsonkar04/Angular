import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../recipes/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipedetail:Recipe;


  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList()
  {
    this.shoppingService.ingredieants = this.recipedetail.ingredients;
  }
}
