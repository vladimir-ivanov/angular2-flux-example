import {NgModule} from "@angular/core";
import {CounterPageComponent} from "./counter-page-component.ts";
import {CommonModule}   from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CounterPageComponent
    ],
    providers: [
    ]
})
export class CounterModule {}