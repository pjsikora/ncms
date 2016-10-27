import { Component, Input } from '@angular/core';
import { Page } from './page';

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


    showDetails() {
        console.log('showDetails '+this.page._id);
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