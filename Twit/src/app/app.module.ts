import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataService } from "../services/app.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTwitComponent } from './create-twit/create-twit.component';
import { PostComponent } from './post/post.component';
import { MenuComponent } from './menu/menu.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateTwitComponent,
    PostComponent,
    MenuComponent,
    FriendsComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
