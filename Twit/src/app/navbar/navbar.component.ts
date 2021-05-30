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

  constructor(private router: Router, private http: HttpClient) { }

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

  search() {
     this.http.get(`http://localhost:3000/users/username/${this.searchText}`).subscribe((res: any) => {
      if (res.status === 200 ) {
        console.log('sucesso ao buscar: ', res[0].id_user)
      }
      this.router.navigate([`/profile/${res[0].id_user}`])
    }, error => {
      console.log('erro ao buscar: ', error)
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
 