import {bootstrap, provide} from "angular2/angular2";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {RouterComponent} from "./router/router-component";
import {Http, HTTP_PROVIDERS} from "angular2/http";

bootstrap(<any>RouterComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    Http,
    HTTP_PROVIDERS
]);

