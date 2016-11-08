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
    var pages = this.pageService.getPagesFromLS();

    if (pages === null) {
      console.log('Pages doesnt exists in localStorage');

      this.pageService
        .getPages()
        .then(response => {
          this.pages = response;

          this.pageService.setPagesToLS(response); // save in localstorage
        });
    } else {
      console.log('Pages exists in localStorage');

      this.pages = pages;
    }


  }

  addChildClicked(e): void {
    let link = ['/page/form/add/'];
    this.router.navigate(link);
    console.log(e);
    console.log('addChildClicked')
  }

  removeElementClicked(): void {
    console.log('addChildClicked')
  }

  removeHardElementClicked(): void {
    let link = ['/page/form/add/'];
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
