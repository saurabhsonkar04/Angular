import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';

const authRoutes = [
    {path:'sign-up',component:SignUpComponent},
    {path:'sign-in',component:SignInComponent},
]
@NgModule({
    imports:[
        RouterModule.forChild(authRoutes)
    ],
    exports : [RouterModule]
})
export class AuthRouting{

}