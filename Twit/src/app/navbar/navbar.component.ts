import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdownClass= '';
  searchText = "";
  username = "";
  logoutVisible = true;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    let username = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : ""
    this.username = username || "";
    this.dropdownClass = 'list-dropdown d-none';
    this.logoutVisible = true;
  }

  callMenu() { 
    if (this.dropdownClass === 'list-dropdown d-block') {
      this.dropdownClass = 'list-dropdown d-none';
      this.logoutVisible = true;
    } else if (this.dropdownClass === 'list-dropdown d-none') {
      this.dropdownClass = 'list-dropdown d-block';
      this.logoutVisible = false;
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    this.router.navigate(['/login'])
  }
}

