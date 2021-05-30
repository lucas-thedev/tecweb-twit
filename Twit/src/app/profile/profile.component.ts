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
      console.log('res: ', res)
      this.person = res[0]
    });
    this.http.get(`http://localhost:3000/twit/${url[url.length - 1]}`).subscribe((res: any) => {
      const twits = res.slice(0,50)
      this.posts = twits
    });
  }

  follow(): void {
    let url = this.router.url.split('/')
    const idFollowing = url[url.length - 1]
    let idUser = sessionStorage.getItem('user')

    if (idFollowing && idUser) {
      this.http.post(`http://localhost:3000/follow/${idUser}/${idFollowing}`, {}).subscribe((res: any) => {
      console.log('res: ', res)
    });
    }
  }

}
