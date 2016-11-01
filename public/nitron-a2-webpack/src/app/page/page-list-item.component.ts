import { Component, Input } from '@angular/core';
import { Page } from './page';
import {Router} from '@angular/router';

@Component({
    selector: 'page-list-item',
    template: `<li><span (click)="showDetails()">{{page.name}}</span>
                    <span class="fa fa-pencil" data-function="edit" (click)="edit()"></span>
                    <span class="fa fa-trash-o" data-function="delete" (click)="delete()"></span>
                    <span class="fa fa-trash" data-function="deleteHard" (click)="deleteHard()"></span>
                    <span class="fa fa-plus" data-function="addPage" (click)="addPage()"></span>
                    <span class="fa fa-plus-square-o" data-function="addContent" (click)="addContent()"></span>

                    </li>`,
})

export class PageListItemComponent {
    @Input()
    page: Page;


    constructor(private router:Router) {}

    showDetails() {
        let link = ['/page/details/', this.page._id];
        this.router.navigate(link);
    }

    edit() {
        console.log('edit');
    }

    delete() {
        console.log('delete');
    }

    deleteHard() {
        console.log('deleteHard');
    }

    addPage() {
        console.log('addPage');
    }

    addContent() {
        console.log('addContent');
    }

}