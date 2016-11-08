import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Page} from './page';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private pagesUrl = 'http://localhost:8888/api/pages/';  // URL to web api

  constructor(private http: Http) {
  }

  getPages(): Promise<Page[]> {
    return this.http.get(this.pagesUrl+'list')
      .toPromise()
      .then(response => response.json().content)
      .catch(this.handleError);
  }

  delete() {
  }

  create() {
  }

  update() {
  }

  read(id): Promise<Page> {
    return this.http.get(this.pagesUrl+'read?_id='+id)
      .toPromise()
      .then(response => response.json().content)
      .catch(this.handleError)
  }



  setPagesToLS(pages:Array<any>) {
    var thisPages = JSON.stringify(pages);

    localStorage.setItem('nitron_pages', thisPages);
  }

  getPagesFromLS() {
    var pages = JSON.parse(localStorage.getItem('nitron_pages'));

    return pages;
  }

  getPageFromLS(_id) {
    var pages = JSON.parse(localStorage.getItem('nitron_pages')),
        page = null;

    pages.forEach(function(el) {
      if (el._id == _id) {
        page = el;
      }
    });

    return page;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
