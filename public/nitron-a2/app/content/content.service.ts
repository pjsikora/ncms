import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Content } from './content';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContentService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private pagesUrl = 'http://localhost:8888/api/contents/';  // URL to web api

    constructor(private http: Http) { }

    getPages(contentID): Promise<Content[]> {
        return this.http.get(this.pagesUrl+'read?_id='+contentID)
            .toPromise()
            // .then(response => response.json().data as Page[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}