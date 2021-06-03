import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IPost, IFollower} from '../types/index'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  isFollowing: boolean = false;
  idProfileUser: number = 0;
  followers: IFollower[] = [];

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    let url = this.router.url.split('/')

    const idUser = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 0

    this.idProfileUser = +url[url.length - 1]

    this.http.get(`http://localhost:3000/users/${this.idProfileUser}`).subscribe((res: any) => {
      console.log('res: ', res)
      this.person = res[0]
    });
    this.http.get(`http://localhost:3000/twit/${this.idProfileUser}`).subscribe((res: any) => {
      const twits = res.slice(0,50)
      this.posts = twits
    });
    this.getFollowers()
  }

  follow(): void {
    const idUser = sessionStorage.getItem('user')

    if (this.idProfileUser && idUser) {
      if (this.checkIfUserIsInFollowersList()){
        this.http.get(`http://localhost:3000/follow/${idUser}/${this.idProfileUser}`, {}).subscribe((res: any) => {
          this.getFollowers()
        }, err => {
          console.log(err)
        });
      } else {
        this.http.post(`http://localhost:3000/follow/${idUser}/${this.idProfileUser}`, {}).subscribe((res: any) => {
          this.getFollowers()
        }, err => {
          console.log(err)
        });
      } 
    }
  }

  getFollowers():void {
    const idUser = sessionStorage.getItem('user')

    this.http.get(`http://localhost:3000/follow/${idUser}`).subscribe((res: any) => {
    this.followers = res.data || []
    this.isFollowing = this.checkIfUserIsInFollowersList()
    }, err => {
      this.toastr.error(err.error, 'Erro!' )
      this.isFollowing = false;
    });
  }
  
  checkIfUserIsInFollowersList(): boolean {
    return this.followers.some(follower => follower.id_following === this.idProfileUser)
  }

  isFollowEnabled(): boolean {
    const url = this.router.url.split('/')
    const urlId = url[url.length - 1]
    const idUser = sessionStorage.getItem('user')
    return idUser !== urlId 
  }

}
