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

import {CounterActions} from "./../../src/counter/counter-actions";
import dispatcher from "./../../src/dispatcher";

let actions:CounterActions;

describe("CounterActions", () => {
    beforeEachProviders(() => [CounterActions]);

    beforeEach(inject([CounterActions], ca => {
        spyOn(dispatcher, "dispatch");

        actions = ca;
    }));

    describe("increment()", () => {
        it("should call dispatcher.dispatch()", () => {
            actions.increment();

            expect((<any>dispatcher.dispatch).calls.argsFor(0)).toEqual([Object({type: "UPDATE_COUNTER", data: 1})]);

            actions.increment();
            actions.increment();

            expect((<any>dispatcher.dispatch).calls.argsFor(2)).toEqual([Object({type: "UPDATE_COUNTER", data: 1})]);
        });
    });

    describe("decrement()", () => {
        it("should call dispatcher.dispatch()", () => {
            actions.increment();
            actions.increment();
            actions.increment();
            actions.decrement();

            expect((<any>dispatcher.dispatch).calls.argsFor(3)).toEqual([Object({type: "UPDATE_COUNTER", data: -1})]);

            actions.decrement();
            expect((<any>dispatcher.dispatch).calls.argsFor(4)).toEqual([Object({type: "UPDATE_COUNTER", data: -1})]);
        });
    });

    describe("reset()", () => {
        it("should call dispatcher.dispatch()", () => {
            actions.increment();

            expect((<any>dispatcher.dispatch).calls.argsFor(0)).toEqual([Object({type: "UPDATE_COUNTER", data: 1})]);

            actions.reset();
            expect((<any>dispatcher.dispatch).calls.argsFor(1)).toEqual([Object({type: "RESET_COUNTER", data: null})]);
        });
    });
});
