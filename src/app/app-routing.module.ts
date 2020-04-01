import {   Routes,RouterModule, PreloadingStrategy, PreloadAllModules} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './core/home/home.component';
import { AwsComponent } from './core/aws/aws.component';


const appRoutes:Routes = [
    {path : '',component:HomeComponent},
    {path: 'recipes',loadChildren:"./recipes/recipes.module#RecipesModule"},
    {path: 'aws',component:AwsComponent}

]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules})],
    exports : [RouterModule]
})
export class AppRoutingModule{}