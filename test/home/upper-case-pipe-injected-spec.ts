import {
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from "@angular/platform-browser-dynamic/testing";
import {Component} from "@angular/core";
import {inject, async, setBaseTestProviders} from "@angular/core/testing";
import {TestComponentBuilder} from "@angular/compiler/testing";
import {UpperCasePipe} from "../../src/home/upper-case-pipe";

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

@Component({
    selector: "home",
    pipes: <any>[UpperCasePipe],
    template: "<h3>{{message|upperCase}}</h3>"
})
class TestComponent {
    message = "Hello";
}

describe("UpperCasePipe - test the injector selector", () => {
    it("should wrap content", async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;

            expect(compiled.innerText).toContain("HELLO");
        });
    })));
});
