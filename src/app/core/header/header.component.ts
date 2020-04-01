import {Component, EventEmitter, Output} from '@angular/core'
import { RecipeService } from '../../recipes/recipe.service';
import { DataStorage } from '../../shared/datastorage.service';
import { AuthFirebase } from '../../auth/auth.service';
import { LambdaService } from 'src/app/shared/lambda.service';

@Component(
    {
        selector : 'app-header',
        templateUrl : './header.component.html',
        styleUrls : [] 
    }
)
export class HeaderComponent{
    awsResp;
    constructor(private rs:RecipeService,
        private db:DataStorage,
        public auth:AuthFirebase){}
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
    logOut()
    {
        this.auth.signOut();
    }
    
}