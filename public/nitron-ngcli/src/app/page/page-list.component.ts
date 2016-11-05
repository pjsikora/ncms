import {Component, OnInit} from '@angular/core';

import {PageService} from './page.service';
import {Page} from './page';


// import {TranslatePipe} from '../l18n/index';

@Component({
    selector: 'page-list',
    template: `<h1>Pages list</h1>
        <ul>
                <page-list-item *ngFor="let page of pages" [page]="page" (addChild)="addChildClicked($event)"></page-list-item>
        </ul>`,
})

export class PageListComponent implements OnInit {
    pages:Array<Page> = []

    constructor(private pageService: PageService) {
        console.log(this.pages);
    }

    getPages(): void {
        this.pageService
            .getPages()
            .then(response => {
                this.pages = response;
                console.log("data")
                console.log(response);
            });
    }

    addChildClicked():void {
      console.log('addChildClicked')
    }

    ngOnInit(): void {
        this.getPages();
        // this._translate.use('pl')
    }
}
