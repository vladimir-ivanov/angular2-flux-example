/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {inject} from "@angular/core/testing";
import {TestBed} from "@angular/core/testing/test_bed";
import dispatcher from "./../../src/dispatcher.ts";
import {HomePageActions} from "../../src/home/home-page-actions.ts";
import {Http, Response, ResponseOptions, HttpModule} from "@angular/http";
import {Observable} from "rxjs/Rx";

let actions:HomePageActions;
let http:Http;

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

describe("HomePageActions", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule]
        });
    });

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
