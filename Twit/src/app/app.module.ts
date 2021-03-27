import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataService } from "./app.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTwitComponent } from './create-twit/create-twit.component';
import { PostComponent } from './post/post.component';
import { MenuComponent } from './menu/menu.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTwitComponent,
    PostComponent,
    MenuComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
