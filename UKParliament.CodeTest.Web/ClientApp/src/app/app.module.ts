import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRouteModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    PersonsListComponent,
    PersonDetailComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRouteModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
