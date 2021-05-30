import { Component, OnInit } from '@angular/core';
import {IPost} from '../types/index'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-twit',
  templateUrl: './create-twit.component.html',
  styleUrls: ['./create-twit.component.css']
})
export class CreateTwitComponent implements OnInit {
  
  tweet: IPost = {
    id_user: 0,
    username: '',
    created_at: '',
    count_likes: 0,
    count_retwiit: 0,
    content: '',
    is_comment: '',
    updated_at: '',
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  setTweetLen () {
    return this.tweet.content.length;
  }
  
  sendTweet() {
    let date = new Date()
    let user = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 0
    let username = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : ""
    this.tweet.id_user = user ? +user : 0
    this.tweet.username = username || "";
    this.tweet.created_at = date.toISOString().slice(0, 19).replace('T', ' ')
    this.tweet.updated_at = date.toISOString().slice(0, 19).replace('T', ' ')
    this.tweet.is_comment = 'false'

    this.http.post(`http://localhost:3000/twit/${user}`, this.tweet).subscribe((res: any) => {
      
    });
  }

}
