/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from "@angular/platform-browser-dynamic/testing";
import {
    beforeEachProviders,
    beforeEach,
    inject,
    it,
    describe,
    expect,
    setBaseTestProviders,
    inject,
    async
} from "@angular/core/testing";
import {TestComponentBuilder} from "@angular/compiler/testing";
import {FormBuilder} from "@angular/common";
import {LoginPage} from "../../src/login/login-page-component.ts";

let component:LoginPage;
let formBuilder:FormBuilder;

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe("LoginPageComponent", () => {
    beforeEachProviders(() => [FormBuilder]);

    beforeEach(inject([FormBuilder], fb => {
        formBuilder = fb;

        spyOn(formBuilder, "group").and.returnValue("form builder value");
    }));

    beforeEach(async(inject([TestComponentBuilder], tcb => {
        return tcb.overrideTemplate(LoginPage, "<div></div>").createAsync(LoginPage).then(f => {
            component = f.componentInstance;
        });
    })));

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
                preventDefault: () => {
                }
            };

            spyOn(event, "preventDefault");
            component.doLogin(event);

            expect((<any>event.preventDefault).calls.count()).toEqual(1);
        });
    });
});
