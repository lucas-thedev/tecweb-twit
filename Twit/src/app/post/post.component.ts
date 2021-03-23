import { Component, OnInit } from '@angular/core';
import {IPost} from '../types/index'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  _postMock = {
    user: 'Quan Ha',
    action: 'shared a album',
    text: 'Ocean breeze, salty air, sun kissed hair. That endless summer take me there.',
    avatar: '../../assets/boy.png',
    image: '../../assets/post-photo.png',
    likesCount: 87,
    commentCount: 20,
    retwittCount: 13,
    comments: []
  }

  storage = []

  posts: IPost[] = []

  constructor() { }

  ngOnInit(): void {
    const tweets = localStorage.getItem('ttlist')
    if (tweets){
      this.storage = JSON.parse(tweets)
      this.posts = []
      this.storage.map((s, i) => {
        if (i === 0) {
          this.posts.push(this._postMock)
        }

        const newPost = {
          user: `User ${i}`,
          action: 'shared a post',
          text: s,
          avatar: i % 2 === 0 ? '../../assets/boy.png' : '../../assets/girl.png',
          image: '',
          likesCount: 0,
          commentCount: 0,
          retwittCount: 0,
          comments: []
        }

        this.posts.push(newPost)
      }) || []
      console.log(this.storage)
    }
  }

}
