import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';
import { ViewAllFriendsComponent } from './view-all-friends/view-all-friends.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute:Routes =[
  {
    path:"add",
    component : AddFriendsComponent
  },
  {
    path :"viewall",
    component : ViewAllFriendsComponent
  },
  {
    path:"search",
    component: SearchFriendsComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    SearchFriendsComponent,
    ViewAllFriendsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
