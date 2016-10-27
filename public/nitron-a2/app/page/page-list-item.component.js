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
var page_1 = require('./page');
var PageListItemComponent = (function () {
    function PageListItemComponent() {
    }
    PageListItemComponent.prototype.showDetails = function () {
        console.log('showDetails ' + this.page._id);
    };
    PageListItemComponent.prototype.edit = function () {
        console.log('edit');
    };
    PageListItemComponent.prototype.delete = function () {
        console.log('delete');
    };
    PageListItemComponent.prototype.deleteHard = function () {
        console.log('deleteHard');
    };
    PageListItemComponent.prototype.addPage = function () {
        console.log('addPage');
    };
    PageListItemComponent.prototype.addContent = function () {
        console.log('addContent');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', page_1.Page)
    ], PageListItemComponent.prototype, "page", void 0);
    PageListItemComponent = __decorate([
        core_1.Component({
            selector: 'page-list-item',
            template: "<li><span (click)=\"showDetails()\">{{page.name}}</span>\n                    <span class=\"fa fa-pencil\" data-function=\"edit\" (click)=\"edit()\"></span>\n                    <span class=\"fa fa-trash-o\" data-function=\"delete\" (click)=\"delete()\"></span>\n                    <span class=\"fa fa-trash\" data-function=\"deleteHard\" (click)=\"deleteHard()\"></span>\n                    <span class=\"fa fa-plus\" data-function=\"addPage\" (click)=\"addPage()\"></span>\n                    <span class=\"fa fa-plus-square-o\" data-function=\"addContent\" (click)=\"addContent()\"></span>\n\n                    </li>",
        }), 
        __metadata('design:paramtypes', [])
    ], PageListItemComponent);
    return PageListItemComponent;
}());
exports.PageListItemComponent = PageListItemComponent;
//# sourceMappingURL=page-list-item.component.js.map