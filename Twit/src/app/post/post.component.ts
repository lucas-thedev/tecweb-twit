import { Component, OnInit } from '@angular/core';
import {IPost} from '../types/index'
import { DataService } from "./../app.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  storage = []
  posts: IPost[] = []

  constructor(private data: DataService) { 
    this.data.currentMessage.subscribe((message: IPost) => this.posts.unshift(message))
  }

  ngOnInit(): void {
  }

  updateLikeCount(index: number) {
    this.posts[index].likesCount = this.posts[index].likesCount === 1 ? 0 : 1;
  }

}