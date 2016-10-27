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
var content_service_1 = require('../content/content.service');
var PageDetailsComponent = (function () {
    function PageDetailsComponent(pageService, contentService, route, location) {
        this.pageService = pageService;
        this.contentService = contentService;
        this.route = route;
        this.location = location;
        this.page = { name: 'ding' };
        this.contents = [];
    }
    PageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.page.name = params['_id'];
            var id = +params['id'];
            _this.contentService.
                // this.heroService.getHero(id)
                //     .then(hero => this.hero = hero);
            ;
            // this.heroService.getHero(id)
            //     .then(hero => this.hero = hero);
        });
        // this.getPages();
    };
    PageDetailsComponent = __decorate([
        core_1.Component({
            selector: 'page-form',
            template: "<div class=\"medium-3 columns\">\n                <page-list></page-list>\n            </div>\n            <div class=\"medium-9 columns\">\n                <h1>Page details</h1>\n            </div>\n\n        ",
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, content_service_1.ContentService, router_1.ActivatedRoute, common_1.Location])
    ], PageDetailsComponent);
    return PageDetailsComponent;
}());
exports.PageDetailsComponent = PageDetailsComponent;
//# sourceMappingURL=page-details.component.js.map