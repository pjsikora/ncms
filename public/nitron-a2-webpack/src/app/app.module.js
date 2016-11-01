"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var forms_2 = require('@angular/forms');
// import {TranslateModule, TranslateService} from 'ng2-translate';
// App
var app_component_1 = require('./app.component.ts');
// Pages
var index_1 = require('./page/index');
// Contents
var index_2 = require("./content/index");
//
// import { TRANSLATION_PROVIDERS,
//     TranslatePipe,
//     TranslateService }   from './l18n/index';
// Router
var app_routing_module_1 = require('./app-routing.module.ts');
var AppModule = (function () {
    function AppModule() {
        // translate.setDefaultLang('en');
        // translate.use('en');
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_2.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.PageListComponent,
                index_1.PageListItemComponent,
                index_1.PageFormComponent,
                index_1.PageDetailsComponent,
                index_2.ContentFormComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                index_1.PageService,
                index_2.ContentService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map