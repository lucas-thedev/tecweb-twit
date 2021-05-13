import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdownClass= '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dropdownClass = 'list-dropdown d-none';
  }

  callMenu() { 
    if (this.dropdownClass === 'list-dropdown d-block') {
      this.dropdownClass = 'list-dropdown d-none';
    } else if (this.dropdownClass === 'list-dropdown d-none') {
      this.dropdownClass = 'list-dropdown d-block';
    }
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
