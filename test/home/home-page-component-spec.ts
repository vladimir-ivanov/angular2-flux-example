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
    TestComponentBuilder, setBaseTestProviders, injectAsync
} from "angular2/testing";
import {provide} from "angular2/core";
import {CounterPageComponent} from "../../src/counter/counter-page-component";
import {CounterStore} from "../../src/counter/counter-store";
import {CounterActions} from "../../src/counter/counter-actions";

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

describe("HomePageComponent", () => {
    let component:any;
    let actions:any;
    let store:any;

    beforeEachProviders(() => [CounterActions, CounterStore]);

    beforeEach(injectAsync([TestComponentBuilder], tcb => {
        store = new CounterStore();
        actions = new CounterActions();

        spyOn(store, "subscribe");
        spyOn(store, "getCounter").and.returnValue(33);
        spyOn(actions, "increment");
        spyOn(actions, "decrement");
        spyOn(actions, "reset");

        return tcb.overrideTemplate(CounterPageComponent, "<sec></sec>")
            .overrideProviders(CounterPageComponent, [
                provide(CounterActions, {useValue: actions}),
                provide(CounterStore, {useValue: store}) // or useFactory: () => {let counterStore = new CounterStore() //spy and return counterStore}
            ])
            .createAsync(CounterPageComponent)
            .then(f => component = f.componentInstance);
    }));

    beforeEach(() => {
        component.ngOnInit();
    });

    describe("ngOnInit()", () => {

        it("should call getCounter() to get initial value", ()  => {
            expect(store.getCounter.calls.count()).toEqual(1);
        });

        it("should subscribe to the counterStore", ()  => {
            let subscribeCallback = store.subscribe.calls.argsFor(0)[0];
            subscribeCallback();

            expect(store.getCounter.calls.count()).toEqual(2);
            expect(component.counter).toEqual(33);
        });
    });

    describe("increment()", () => {
        it("should proxy to counterActions.increment()", () => {
            component.increment();

            expect(actions.increment.calls.count()).toEqual(1);
        });
    });

    describe("decrement()", () => {
        it("should proxy to counterActions.decrement()", () => {
            component.decrement();

            expect(actions.decrement.calls.count()).toEqual(1);
        });
    });

    describe("reset()", () => {
        it("should proxy to counterActions.reset()", () => {
            component.reset();

            expect(actions.reset.calls.count()).toEqual(1);
        });
    });
});
