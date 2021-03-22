import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-twit',
  templateUrl: './create-twit.component.html',
  styleUrls: ['./create-twit.component.css']
})
export class CreateTwitComponent implements OnInit {

  tweet = '';
  tweetOBJ = {
    tweet: ''
  }
  tweetList: string[] = []

  constructor() {
    
  }

  ngOnInit(): void {
  }

  setTweetLen () {
    return this.tweet.length;
  }
  
  sendTweet() {
    if (this.tweet !== '') {
      this.tweetList.push(this.tweet);
      this.tweet = '';
    }
  }

}
