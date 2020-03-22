import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../recipes/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipedetail:Recipe;
  id:number;


  constructor(private recipeService:RecipeService,
    private activatedRoute : ActivatedRoute,
    private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipedetail = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList()
  {
    this.shoppingService.ingredieants = this.recipedetail.ingredients;
  }
}
