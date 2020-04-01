import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRouting } from './auth-routing';

@NgModule({
    declarations : [
        SignInComponent,
        SignUpComponent
    ],
    imports : [
        FormsModule,
        CommonModule,
        SharedModule,
        AuthRouting
    ]
})
export class AuthModule{

}