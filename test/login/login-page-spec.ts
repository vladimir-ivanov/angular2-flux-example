import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";
BrowserDomAdapter.makeCurrent();

import {
    beforeEachProviders,
    beforeEach,
    inject,
    it,
    describe,
    TestComponentBuilder
} from "angular2/testing";
import {FormBuilder} from "angular2/angular2";

import {LoginPage} from "./../../src/login/login-page.ts";

let component:LoginPage;
let formBuilder:FormBuilder;

describe("LoginPageComponent", () => {
    beforeEachProviders(() => [FormBuilder]);

    beforeEach(inject([FormBuilder], fb => {
        formBuilder = fb;

        spyOn(formBuilder, "group").and.returnValue("form builder value");
    }));

    beforeEach(inject([TestComponentBuilder], tcb => {
        tcb.overrideTemplate(LoginPage, "<div></div>").createAsync(LoginPage).then(f => {
            component = f.componentInstance;
        });
    }));

    it("should initialize correctly its properties", () => {
        expect(component.model).toEqual({email: "x@yahoo.com", password: ""});
        expect(component.loginForm).toEqual("form builder value");

        let formBuilderGroupArgs = (<any>formBuilder.group).calls.argsFor(0)[0];

        expect(formBuilderGroupArgs.email.length).toEqual(2);
        expect(formBuilderGroupArgs.email[0]).toEqual("");
        expect(typeof formBuilderGroupArgs.email[1]).toEqual("function");
        expect(formBuilderGroupArgs.password.length).toEqual(2);
        expect(formBuilderGroupArgs.password[0]).toEqual("");
        expect(typeof formBuilderGroupArgs.password[1]).toEqual("function");
    });

    describe("doLogin()", () => {
        it("should call event.preventDefault()", () => {
            let event = {
                preventDefault: () => {}
            };

            spyOn(event, "preventDefault");
            component.doLogin(event);

            expect((<any>event.preventDefault).calls.count()).toEqual(1);
        });
    });
});
