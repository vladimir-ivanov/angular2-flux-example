import { Component, bootstrap, provide} from "angular2/angular2";
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterComponent} from './router/router-component';

bootstrap(<any>RouterComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

