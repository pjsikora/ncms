import {Component, OnInit} from '@angular/core';

import {PageService} from './page.service';
import {Page} from './page';


// import {TranslatePipe} from '../l18n/index';

@Component({
  selector: 'page-list',
  templateUrl: './page-list.component.html',
})

export class PageListComponent implements OnInit {
  pages: Array<Page> = []

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

  addChildClicked(e): void {
    console.log(e);
    console.log('addChildClicked')
  }

  removeElementClicked(): void {
    console.log('addChildClicked')
  }

  removeHardElementClicked(): void {
    console.log('removeHardElementClicked')
  }

  editClicked(): void {
    console.log('editClicked')
  }

  addContentClicked(): void {
    console.log('editClicked')
  }

  ngOnInit(): void {
    this.getPages();
    // this._translate.use('pl')
  }
}
