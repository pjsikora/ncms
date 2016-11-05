import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Page } from './page';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PageService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private pagesUrl = 'http://localhost:8888/api/pages/list';  // URL to web api

    constructor(private http: Http) { }

    getPages(): Promise<Page[]> {
        return this.http.get(this.pagesUrl)
            .toPromise()
            .then(response => response.json().content)
            .catch(this.handleError);
    }

    delete() {}
    create() {}
    update() {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}