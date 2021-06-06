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
  loggedFollowers: IFollower[] = [];
  followersCount = 0

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    let url = this.router.url.split('/')

    const idUser = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 0

    this.idProfileUser = +url[url.length - 1]

    this.http.get(`http://localhost:3000/users/${this.idProfileUser}`).subscribe((res: any) => {
      this.person = res[0]
    });
    this.http.get(`http://localhost:3000/twit/${this.idProfileUser}`).subscribe((res: any) => {
      const twits = res.data.slice(0,50)
      this.posts = twits
    });

    this.getLoggedFollowers()
    this.getFollowers()
  }

  follow(): void {
    const idUser = sessionStorage.getItem('user')

    if (this.idProfileUser && idUser) {
      if (this.isFollowing){
        this.http.get(`http://localhost:3000/follow/${idUser}/${this.idProfileUser}`, {}).subscribe((res: any) => {
          this.getLoggedFollowers()
          this.getFollowers()
        }, err => {
          console.log(err)
        });
      } else {
        this.http.post(`http://localhost:3000/follow/${idUser}/${this.idProfileUser}`, {}).subscribe((res: any) => {
          this.getLoggedFollowers()
          this.getFollowers()
        }, err => {
          console.log(err)
        });
      } 
    }
  }

  getFollowers():void {
    this.http.get(`http://localhost:3000/follow/${this.idProfileUser}`).subscribe((res: any) => {
    console.log('res backend: ', res)
    this.followers = res.data
    console.log('followers: ', this.followers)
    this.isFollowing = this.checkIfUserIsInFollowersList()
    this.followersCount = res.data.length
    }, err => {
      this.toastr.error(err.error, 'Erro!' )
    });
  }

  getLoggedFollowers() {
    const loggedUserId = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 0

    this.http.get(`http://localhost:3000/follow/${loggedUserId}`).subscribe((res: any) => {
      this.followers = res.data
      this.loggedFollowers = res.data
      this.isFollowing = this.checkIfUserIsInFollowersList()
      }, err => {
        this.toastr.error(err.error, 'Erro!' )
      });
  }
  
  checkIfUserIsInFollowersList(): boolean {
    const hasFollowerInList = this.loggedFollowers.some(follower => follower.id_following === this.idProfileUser)
    return hasFollowerInList
  }

  getFollowerCount (): number {
    console.log('AAA: ', this.loggedFollowers, this.followers)
    return this.followers.length
  }

  isLoggedUserProfile(): boolean {
    const url = this.router.url.split('/')
    const urlId = url[url.length - 1]
    const idUser = sessionStorage.getItem('user')
    this.followers = this.loggedFollowers
    return idUser !== urlId 
  }

}
