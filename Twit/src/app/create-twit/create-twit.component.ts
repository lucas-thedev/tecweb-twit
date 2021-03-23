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
    const tweets = localStorage.getItem('ttlist')
    if (tweets){
      this.tweetList = JSON.parse(tweets)
      console.log(this.tweetList)
    }
  }

  setTweetLen () {
    return this.tweet.length;
  }
  
  sendTweet() {
    if (this.tweet !== '') {
      this.tweetList.push(this.tweet);
      localStorage.setItem('ttlist', JSON.stringify(this.tweetList))
      console.log(this.tweetList)
      this.tweet = '';
    }
  }

}
