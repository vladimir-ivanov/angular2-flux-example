/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing/test_bed";
import {UpperCasePipe} from "../../src/home/upper-case-pipe";

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

@Component({
    selector: "home",
    pipes: <any>[UpperCasePipe],
    template: "<h3>{{message|upperCase}}</h3>"
})
class TestComponent {
    message = "Hello";
}

describe("UpperCasePipe - test the injector selector", () => {
    it("should wrap content", () => {
        TestBed.configureTestingModule({
            declarations: [TestComponent]
        });

        let fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled.innerText).toContain("HELLO");
    });
});
