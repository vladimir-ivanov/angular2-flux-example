// /// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
// import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
// import {inject} from "@angular/core/testing";
// import {TestBed} from "@angular/core/testing/test_bed";
// import {CounterStore} from "./../../src/counter/counter-store";
// import dispatcher from "./../../src/dispatcher";
// import {UPDATE_COUNTER, RESET_COUNTER} from "../../src/counter/counter-actions";
//
// let store:any;
//
// TestBed.initTestEnvironment(
//     BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting()
// );
//
// describe("CounterStore", () => {
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [CounterStore]
//         });
//     });
//
//     beforeEach(() => spyOn(dispatcher, "subscribe"));
//     beforeEach(inject([CounterStore], cs => {
//         store = cs;
//
//         spyOn(store, "emit");
//     }));
//
//     describe("constructor()", () => {
//         it("should subscribe a callback on the dispatcher.subscribe", () => {
//             let subscribeCallback:Function = (<any>dispatcher.subscribe).calls.argsFor(0)[0];
//
//             subscribeCallback({type: UPDATE_COUNTER, data: 4});
//             expect((<any>store.emit).calls.argsFor(0)).toEqual(["changed"]);
//         });
//     });
//
//     describe("getCounter()", () => {
//         it("should return the current value of the counter", () => {
//             //grab the callback body
//             let subscribeCallback:Function = (<any>dispatcher.subscribe).calls.argsFor(0)[0];
//             //pre condition
//             expect(store.getCounter()).toEqual(20);
//             //action
//             subscribeCallback({type: UPDATE_COUNTER, data: 5});
//             //post condition
//             expect(store.getCounter()).toEqual(25);
//
// //and reset
//             subscribeCallback({type: RESET_COUNTER, data: null});
//             //post condition
//             expect(store.getCounter()).toEqual(20);
//         });
//     });
// });
