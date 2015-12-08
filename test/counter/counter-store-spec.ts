import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";
BrowserDomAdapter.makeCurrent();

import {
    beforeEachProviders,
    beforeEach,
    afterEach,
    inject,
    it,
    describe,
    TestComponentBuilder
} from "angular2/testing";
import {Injector} from "angular2/angular2";

import {CounterStore} from "./../../src/counter/counter-store";
import dispatcher from "./../../src/dispatcher";
import {UPDATE_COUNTER, RESET_COUNTER} from "../../src/counter/counter-actions";

let store:any;

describe("CounterStore", () => {
    beforeEachProviders(() => [CounterStore]);

    beforeEach(() => spyOn(dispatcher, "register"));
    beforeEach(inject([CounterStore], cs => {
        store = cs;

        spyOn(store, "emit");
    }));

    describe("constructor()", () => {
        it("should register a callback on the dispatcher.register", () => {
            let registerCallback:Function = (<any>dispatcher.register).calls.argsFor(0)[0];

            registerCallback({type: UPDATE_COUNTER, data: 4});
            expect((<any>store.emit).calls.argsFor(0)).toEqual(["changed"]);
        });
    });

    describe("getCounter()", () => {
        it("should return the current value of the counter", () => {
            //grab the callback body
            let registerCallback:Function = (<any>dispatcher.register).calls.argsFor(0)[0];
            //pre condition
            expect(store.getCounter()).toEqual(20);
            //action
            registerCallback({type: UPDATE_COUNTER, data: 5});
            //post condition
            expect(store.getCounter()).toEqual(25);

//and reset
            registerCallback({type: RESET_COUNTER, data: null});
            //post condition
            expect(store.getCounter()).toEqual(20);
        });
    });
});