import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  imgFeed:string = '../../assets/icons/feed.svg';
  imgUser:string = '../../assets/icons/user.svg';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleFeedIcon(state:string) {
    this.imgFeed = state === 'over' ? '../../assets/icons/feed-white.svg' : '../../assets/icons/feed.svg';
  }

  toggleUserIcon(state:string) {
    this.imgUser = state === 'over' ? '../../assets/icons/user-white.svg' : '../../assets/icons/user.svg';
  }

  navigateToProfile() {
    this.router.navigate(['/profile/1']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
