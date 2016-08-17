/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {inject} from "@angular/core/testing";
import dispatcher from "./../../src/dispatcher";
import {HomePageActions} from "../../src/home/home-page-actions";
import {Http, HTTP_PROVIDERS, Response, ResponseOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

let actions:HomePageActions;
let http:Http;

describe("HomePageActions", () => {
    beforeEachProviders(() => [Http, HTTP_PROVIDERS]);

    beforeEach(inject([Http], _ => {
        http = _;

        spyOn(dispatcher, "emit");

        spyOn(http, "get").and.returnValue(Observable.from([
            new Response(new ResponseOptions({body: {colors: "red"}}))
        ]));

        actions = new HomePageActions(http);
    }));

    describe("initializeData()", () => {
        it("should call dispatcher.emit()", () => {
            actions.initializeData();

            expect((<any>dispatcher.emit).calls.argsFor(0)).toEqual([
                Object({
                    type: "FETCHED_DATA",
                    data: Object({colors: "red"})
                })
            ]);
        });
    });
});
