import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'person-detail/:id', component: PersonDetailComponent },
    { path: 'person-edit/:id', component: PersonEditComponent },
    { path: 'persons', component: PersonsListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule {}