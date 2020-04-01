import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './Dropdown.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations : [
       
        DropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        FormsModule
    ]
})
export class SharedModule{

}