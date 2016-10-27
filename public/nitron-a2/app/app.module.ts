import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';


// App
import {AppComponent}   from './app.component';


// Pages
import {PageService} from './page/page.service';

import {PageFormComponent} from './page/page-form.component';
import {PageListComponent} from './page/page-list.component';
import {PageListItemComponent} from './page/page-list-item.component';
import {PageDetailsComponent} from './page/page-details.component';


// Contents
import {ContentService} from "./content/content.service";


// Router
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageListComponent,
        PageListItemComponent,
        PageFormComponent,
        PageDetailsComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        PageService,
        ContentService
    ]
})

export class AppModule {
}