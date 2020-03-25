import {Component, EventEmitter, Output} from '@angular/core'
import { RecipeService } from '../recipes/recipe.service';
import { DataStorage } from '../shared/datastorage.service';

@Component(
    {
        selector : 'app-header',
        templateUrl : './header.component.html',
        styleUrls : [] 
    }
)
export class HeaderComponent{
 
    constructor(private rs:RecipeService,
        private db:DataStorage){}
    onSave()
    {
        this.db.storeRecipes().subscribe(
            (resp:Response) => {console.log(resp)}
        );
    }
    fetch()
    {
        this.db.fetchRecipes();
    }
}