import {Component, OnInit} from '@angular/core';

import {PageService} from './page.service';

@Component({
    selector: 'page-list',
    template: `<h1>Page list</h1>
        <ul>
                <page-list-item *ngFor="let page of pages" [page]="page"></page-list-item>
        </ul>`,
})

export class PageListComponent implements OnInit {
    pages = []

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

    ngOnInit(): void {
        this.getPages();
    }
}