import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import {Component} from "angular2/core";

import {
    it,
    injectAsync,
    describe,
    expect,
    TestComponentBuilder, setBaseTestProviders
} from "angular2/testing";
import {UpperCasePipe} from "../../src/home/upper-case-pipe";

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

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
