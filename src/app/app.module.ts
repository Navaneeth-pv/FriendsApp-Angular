import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';
import { ViewAllFriendsComponent } from './view-all-friends/view-all-friends.component';
import { NavigationComponent } from './navigation/navigation.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
