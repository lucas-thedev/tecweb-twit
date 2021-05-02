import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IPost} from '../types/index'
import { Router } from '@angular/router';

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

  posts: IPost[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    let url = this.router.url.split('/')

    this.http.get(`http://localhost:3000/users/${url[url.length - 1]}`).subscribe((res: any) => {
      this.person = res[0]
    });
    this.http.get(`http://localhost:3000/twit/${url[url.length - 1]}`).subscribe((res: any) => {
      
      this.posts = res
    });
  }

}
