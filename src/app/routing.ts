import {Routes, RouterModule}   from '@angular/router';
import {ModuleWithProviders}   from '@angular/core';
import {HomePageComponent} from "../home/home-page-component.ts";
import {CounterPageComponent} from "../counter/counter-page-component.ts";
import {LoginPageComponent} from "../login/login-page-component.ts";
import {ItemsListComponent} from "../items-list/items-list-component.ts";

const appRoutes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: "home", component: HomePageComponent},
    {path: "login", component: LoginPageComponent},
    {path: "counter", component: CounterPageComponent},
    {path: "items-list", component: ItemsListComponent}
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});