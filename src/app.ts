import {bootstrap, provide} from "angular2/angular2";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {RouterComponent} from "./router/router-component";

bootstrap(<any>RouterComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

