/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {TestBed, async} from "@angular/core/testing";
import {CounterPageComponent} from "../../src/counter/counter-page-component";
import {CounterStore} from "../../src/counter/counter-store";
import {CounterActions} from "../../src/counter/counter-actions";

xdescribe("CounterPageComponent", () => {
    let component:any;
    let actions:any;
    let store:any;

    beforeEach(async(() => {
        store = new CounterStore();
        actions = new CounterActions();

        spyOn(store, "subscribe");
        spyOn(store, "getCounter").and.returnValue(33);
        spyOn(actions, "increment");
        spyOn(actions, "decrement");
        spyOn(actions, "reset");

        TestBed.configureTestingModule({
            providers: [
                {provide: CounterActions, useValue: actions},
                {provide: CounterStore, useValue: store}
            ],
            declarations: [CounterPageComponent]
        });

        TestBed.overrideComponent(CounterPageComponent, {
            set: {
                template: `<div>Overridden template here</div>`
            }
        });

        TestBed.compileComponents().then((ar) => {
            let fixture = TestBed.createComponent(CounterPageComponent);
            fixture.detectChanges();

            component = fixture.componentInstance;
        });
    }));

    describe("ngOnInit()", () => {
        beforeEach(() => component.ngOnInit());

        it("should call getCounter() to get initial value", () => {
            expect(store.getCounter.calls.count()).toEqual(2);
        });

        it("should subscribe to the counterStore", () => {
            let subscribeCallback = store.subscribe.calls.argsFor(0)[0];
            subscribeCallback();

            expect(store.getCounter.calls.count()).toEqual(3);
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
