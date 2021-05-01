import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  person = {
    "username": "",
    "created_at": "",
    "biograph": "",
    "birthday": "",
    "perfil_pic": "",
    "password": "",
    "email": "",
    "name": ""
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users/2').subscribe((res: any) => {
      this.person = res[0]
    });
  }

}
