import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PageService} from './page.service';
import {Page} from './page';


// import {TranslatePipe} from '../l18n/index';

@Component({
  selector: 'page-list',
  templateUrl: './page-list.component.html',
  // templateUrl: require('./page-list.component.pug'),
})



export class PageListComponent implements OnInit {
  pages: Array<Page> = []

  constructor(private pageService: PageService,
              private router: Router) {
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
    let link = ['/form/add/'];
    this.router.navigate(link);
    console.log(e);
    console.log('addChildClicked')
  }

  removeElementClicked(): void {
    console.log('addChildClicked')
  }

  removeHardElementClicked(): void {
    let link = ['/form/add/'];
    this.router.navigate(link);
    console.log('removeHardElementClicked')
  }

  editClicked(page): void {
    console.log("========= page =========");
    console.log(page)
    let link = ['/page/form/edit/', page._id];
    this.router.navigate(link);
    console.log('editClicked')
  }

  addContentClicked(): void {
    let link = ['/content/add/'];
    this.router.navigate(link);
    console.log('editClicked')
  }

  ngOnInit(): void {
    this.getPages();
    // this._translate.use('pl')
  }
}
