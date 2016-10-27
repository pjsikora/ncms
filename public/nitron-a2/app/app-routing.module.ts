import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PageFormComponent} from './page/page-form.component';
import {PageListComponent} from './page/page-list.component';
import {PageDetailsComponent} from "./page/page-details.component";


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
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}