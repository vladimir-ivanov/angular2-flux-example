/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {inject, async, TestBed} from "@angular/core/testing";
import {CounterActions} from "./../../src/counter/counter-actions.ts";
import dispatcher from "./../../src/dispatcher.ts";

let actions:CounterActions;

describe("CounterActions", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [CounterActions]
        });
    }));

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
