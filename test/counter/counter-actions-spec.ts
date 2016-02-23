import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import {
    beforeEachProviders,
    beforeEach,
    inject,
    it,
    describe,
    expect,
    setBaseTestProviders
} from "angular2/testing";

import {CounterActions} from "./../../src/counter/counter-actions";
import dispatcher from "./../../src/dispatcher";

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

let actions:CounterActions;

describe("CounterActions", () => {
    beforeEachProviders(() => [CounterActions]);

    beforeEach(inject([CounterActions], ca => {
        spyOn(dispatcher, "emit");

        actions = ca;
    }));

    describe("increment()", () => {
        it("should call dispatcher.emit()", () => {
            actions.increment();

            expect((<any>dispatcher.emit).calls.argsFor(0)).toEqual([Object({type: "UPDATE_COUNTER", data: 1})]);

            actions.increment();
            actions.increment();

            expect((<any>dispatcher.emit).calls.argsFor(2)).toEqual([Object({type: "UPDATE_COUNTER", data: 1})]);
        });
    });

    describe("decrement()", () => {
        it("should call dispatcher.emit()", () => {
            actions.increment();
            actions.increment();
            actions.increment();
            actions.decrement();

            expect((<any>dispatcher.emit).calls.argsFor(3)).toEqual([Object({type: "UPDATE_COUNTER", data: -1})]);

            actions.decrement();
            expect((<any>dispatcher.emit).calls.argsFor(4)).toEqual([Object({type: "UPDATE_COUNTER", data: -1})]);
        });
    });

    describe("reset()", () => {
        it("should call dispatcher.emit()", () => {
            actions.increment();

            expect((<any>dispatcher.emit).calls.argsFor(0)).toEqual([Object({type: "UPDATE_COUNTER", data: 1})]);

            actions.reset();
            expect((<any>dispatcher.emit).calls.argsFor(1)).toEqual([Object({type: "RESET_COUNTER", data: null})]);
        });
    });
});
