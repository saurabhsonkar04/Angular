import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name',{static:false}) name :ElementRef;
  @ViewChild('amount',{static:false}) amount : ElementRef;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  }

  addItem()
  {
    const ingredient = new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    this.shoppingService.ingredientAdded(ingredient);
    //this.addIngrdient.emit(ingredient);
  }
}
