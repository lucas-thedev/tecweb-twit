import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/app.service";
import {IPost} from '../types/index'

@Component({
  selector: 'app-create-twit',
  templateUrl: './create-twit.component.html',
  styleUrls: ['./create-twit.component.css']
})
export class CreateTwitComponent implements OnInit {


  tweet = '';
  tweetOBJ = {
    user: 'Quan Ha',
    action: '',
    text: '',
    avatar: 'assets/boy.png',
    image: '',
    likesCount: 0,
    commentCount: 0,
    retwittCount: 0,
    comments: []
  }
  tweetList: IPost[] = []

  constructor(private data: DataService) {
    this.data.currentMessage.subscribe(message => this.tweetList.push(message));
  }

  ngOnInit(): void {
  }

  setTweetLen () {
    return this.tweet.length;
  }
  
  sendTweet() {
    if (this.tweet !== '') {
      this.tweetOBJ.text = this.tweet;
      this.data.changeMessage({...this.tweetOBJ})
      this.tweet = '';
    }
  }

}
