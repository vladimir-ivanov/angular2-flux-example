import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";
import {Component} from "angular2/core";
BrowserDomAdapter.makeCurrent();

import {
    it,
    injectAsync,
    describe,
    expect,
    TestComponentBuilder
} from "angular2/testing";
import {UpperCasePipe} from "../../src/home/upper-case-pipe";

@Component({
    selector: "home",
    pipes: <any>[UpperCasePipe],
    template: "<h3>{{message|upperCase}}</h3>"
})
class TestComponent {
    message = "Hello";
}

describe("UpperCasePipe - test the injector selector", () => {
    it("should wrap content", injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;

            expect(compiled.innerText).toContain("HELLO");
        });
    }));
});
