import {NgModule} from '@angular/core';
import {HomePageComponent} from "./home-page-component";
import {UpperCasePipe} from "./upper-case-pipe";
import {CommonModule}   from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HomePageComponent, UpperCasePipe
    ],
    providers: []
})
export class HomePageModule {
}