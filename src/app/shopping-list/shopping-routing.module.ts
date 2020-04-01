import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';

const shoppigRoutes = [ {path   : "shopping-list", component:ShoppingListComponent}];
@NgModule(
    {
        imports : [RouterModule.forChild(shoppigRoutes)],
        exports : [RouterModule]
    }
)
export class ShoppingRoute{

}