/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {TestBed, inject, async} from "@angular/core/testing";
import {TestingCompilerFactory} from "@angular/core/testing/test_compiler";
import {TestingCompilerFactoryImpl} from "@angular/compiler/testing";
import {LoginPageComponent} from "./login-page-component.ts";
import {CommonModule}   from '@angular/common';
import {FormsModule}   from '@angular/forms';

let component:LoginPageComponent;

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

describe("LoginPageComponent", () => {
    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            declarations: [
                LoginPageComponent
            ]
        });

        TestBed.overrideComponent(LoginPageComponent, {
            set: {
                template: `<div>Overridden template here</div>`
            }
        });

        TestBed.compileComponents().then((ar) => {
            let fixture = TestBed.createComponent(LoginPageComponent);
            fixture.detectChanges();

            component = fixture.componentInstance;
        });

    }));

    it("should initialize correctly its properties", () => {
        expect(JSON.stringify(component.model)).toEqual('{"email":"email@yahoo.com","password":""}');
    });
});
