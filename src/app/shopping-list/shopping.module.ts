import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingRoute } from './shopping-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        CommonModule,
        ShoppingRoute,
        SharedModule
    ],
    providers:[],
    exports:[]
})
export class SHoopingModule{

}