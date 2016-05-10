import {provide} from "@angular/core";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {RouterComponent} from "./router/router-component";
import {Http, HTTP_PROVIDERS} from "@angular/http";
import {bootstrap} from "@angular/platform-browser-dynamic";

bootstrap(<any>RouterComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    Http,
    HTTP_PROVIDERS
]);

