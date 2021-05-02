import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IPost} from '../types/index'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: IPost[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/twit').subscribe((res: any) => {
      this.posts = res
    })
  }

}
