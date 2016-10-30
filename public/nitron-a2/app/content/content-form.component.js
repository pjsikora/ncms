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
var content_service_1 = require('./content.service');
var ContentFormComponent = (function () {
    function ContentFormComponent(contentService, route, location) {
        this.contentService = contentService;
        this.route = route;
        this.location = location;
        this.page = { name: 'ding' };
    }
    ContentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            console.log('params');
            console.log(params);
            _this.page.name = params['_id'];
            var id = +params['id'];
        });
    };
    ContentFormComponent = __decorate([
        core_1.Component({
            selector: 'page-form',
            template: "<h1>Page form</h1>\n        <form action=\"\">\n            <div class=\"row\">\n                <div class=\"medium-12 columns\">\n                    <label for=\"\">Name\n                        <input type=\"text\" value=\"{{page.name}}\" placeholder=\"name\">\n                    </label>\n                </div>\n            </div>\n        \n        </form>\n        \n        ",
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, router_1.ActivatedRoute, common_1.Location])
    ], ContentFormComponent);
    return ContentFormComponent;
}());
exports.ContentFormComponent = ContentFormComponent;
//# sourceMappingURL=content-form.component.js.map