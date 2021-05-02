import { Component, Input, OnInit } from '@angular/core';
import {IPost} from '../types/index'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {


  @Input() posts: IPost[] = [];
  storage = []

  constructor(private http: HttpClient, private router: Router) { 
  }

  ngOnInit(): void {
    
  }

  updateLikeCount(index: number) {
    this.posts[index].count_likes = this.posts[index].count_likes === 1 ? 0 : 1;
  }

}