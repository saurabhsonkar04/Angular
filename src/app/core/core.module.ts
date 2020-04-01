import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorage } from '../shared/datastorage.service';
import { AuthFirebase } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { LambdaService } from '../shared/lambda.service';
import { AwsComponent } from './aws/aws.component';

@NgModule({
    declarations : [
        HomeComponent,
        HeaderComponent,
        AwsComponent
    ],
    imports : [
        SharedModule,
        AppRoutingModule
    ],
    exports : [
        HeaderComponent,
        AwsComponent
    ],
    providers : [ShoppingListService,RecipeService,DataStorage,AuthFirebase,AuthGuard,LambdaService]
    
})
export class CoreModule{

}