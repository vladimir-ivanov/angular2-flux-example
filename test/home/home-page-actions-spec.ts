import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";
BrowserDomAdapter.makeCurrent();

import {
    beforeEachProviders,
    beforeEach,
    inject,
    it,
    describe,
    expect
} from "angular2/testing";

import dispatcher from "./../../src/dispatcher";
import {HomePageActions} from "../../src/home/home-page-actions";
import {Http, HTTP_PROVIDERS, Response, ResponseOptions} from "angular2/http";

import {Observable} from "rxjs/Rx";

let actions:HomePageActions;
let http:Http;

describe("HomePageActions", () => {
    beforeEachProviders(() => [Http, HTTP_PROVIDERS]);

    beforeEach(inject([Http], _ => {
        http = _;

        spyOn(dispatcher, "dispatch");

        spyOn(http, "get").and.returnValue(Observable.from([
            new Response(new ResponseOptions({body: {colors: "red"}}))
        ]));

        actions = new HomePageActions(http);
    }));

    describe("initializeData()", () => {
        it("should call dispatcher.dispatch()", () => {
            actions.initializeData();

            expect((<any>dispatcher.dispatch).calls.argsFor(0)).toEqual([
                Object({
                    type: "FETCHED_DATA",
                    data: Object({colors: "red"})
                })
            ]);
        });
    });
});
