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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var page_service_1 = require('./page.service');
var page_1 = require("./page");
var PageFormComponent = (function () {
    function PageFormComponent(pageService, route, location) {
        this.pageService = pageService;
        this.route = route;
        this.location = location;
    }
    PageFormComponent.prototype.onSubmitClick = function () {
        this.page = new page_1.Page();
        console.log(this.page.is_deleted);
        console.log(this.page.is_visible);
    };
    PageFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            console.log('params');
            console.log(params);
            _this.page.name = params['_id'];
            var id = +params['id'];
        });
    };
    PageFormComponent = __decorate([
        core_1.Component({
            selector: 'page-form',
            template: "\n            <div class=\"medium-3 columns\">\n                <page-list></page-list>\n            </div>\n            <div class=\"medium-9 columns\">\n                <div class=\"row\">\n                    <div class=\"medium-12 columns\">\n                        <h1>Page form</h1>\n                    </div>\n                </div>\n                <form action=\"\">\n                    <div class=\"row\">\n                        <div class=\"medium-12 columns\">\n                            <label for=\"\">Name\n                                <input type=\"text\" value=\"{{page.name}}\" placeholder=\"name\">\n                            </label>\n                        </div>\n                        <div class=\"medium-12 columns\">\n                            <label for=\"\">Parent_id\n                                <input type=\"text\" value=\"{{page.parent_id}}\" placeholder=\"parent_id\">\n                            </label>\n                        </div>\n                        <div class=\"medium-12 columns\">\n                            <label for=\"\">Order\n                                <input type=\"text\" value=\"{{page.order}}\" placeholder=\"order\">\n                            </label>\n                        </div>\n                        <div class=\"medium-12 columns\">\n                            <label for=\"\">Created\n                                <input type=\"text\" value=\"{{page.created}}\" placeholder=\"created\">\n                            </label>\n                        </div>\n                        <div class=\"medium-12 columns\">\n                            <input id=\"checkbox1\" type=\"checkbox\" value=\"{{page.is_deleted}}\"><label for=\"checkbox1\">Is deleted (is_deleted)</label>\n                        </div>\n                        <div class=\"medium-12 columns\">\n                            <input id=\"checkbox1\" type=\"checkbox\" value=\"{{page.is_visible}}\"><label for=\"checkbox1\">Is visible (is_visible)</label>\n                        </div>\n                        <div class=\"medium-12 columns\">\n                            <button class=\"button\" (click)=\"onSubmitClick()\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        ",
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, router_1.ActivatedRoute, common_1.Location])
    ], PageFormComponent);
    return PageFormComponent;
}());
exports.PageFormComponent = PageFormComponent;
//# sourceMappingURL=page-form.component.js.map