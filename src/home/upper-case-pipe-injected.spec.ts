/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {Component} from "@angular/core";
import {TestBed, async} from "@angular/core/testing";
import {UpperCasePipe} from "../../src/home/upper-case-pipe";

@Component({
    selector: "home",
    //pipes: <any>[UpperCasePipe],
    template: "<h3>{{message|upperCase}}</h3>"
})
class TestComponent {
    message = "Hello";
}

describe("UpperCasePipe - test the injector selector", () => {
    it("should wrap content", async(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, UpperCasePipe]
        });

        let fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled.innerText).toContain("HELLO");
    }));
});
