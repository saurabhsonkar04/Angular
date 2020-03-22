import {Component, EventEmitter, Output} from '@angular/core'

@Component(
    {
        selector : 'app-header',
        templateUrl : './header.component.html',
        styleUrls : [] 
    }
)
export class HeaderComponent{
    @Output() feautreSelected = new EventEmitter<string>();

    onSelect(feature: string)
    {
        this.feautreSelected.emit(feature);
    }
}