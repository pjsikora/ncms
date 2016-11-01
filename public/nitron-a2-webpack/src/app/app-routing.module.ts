import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PageFormComponent, PageListComponent, PageDetailsComponent} from './page/index';
// import {} from './page/page-list.component';
// import {} from "./page/page-details.component";


import {ContentFormComponent} from './content/content-form.component';



const routes: Routes = [
    {
        path: '',
        component: PageListComponent
    },
    {
        path: 'page/add/:parent_id',
        component: PageFormComponent
    },
    {
        path: 'page/edit/:_id',
        component: PageFormComponent
    },
    {
        path: 'page/details/:_id',
        component: PageDetailsComponent
    },
    {
        path: 'content/add',
        component: ContentFormComponent
    },

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}