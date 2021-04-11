import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdownClass= '';

  constructor() { }

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

}
