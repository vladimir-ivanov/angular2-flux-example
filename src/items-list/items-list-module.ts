import {NgModule} from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {ItemsListComponent} from "./items-list-component.ts";
import {ItemComponent} from "./item-component.ts";
import {AddItemComponent} from "./add-item-component.ts";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ItemComponent,
        AddItemComponent,
        ItemsListComponent
    ],
    providers: []
})
export class ItemsListModule {
}