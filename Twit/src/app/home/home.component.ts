import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IPost} from '../types/index'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: IPost[] = [];

  searchText: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  updatePosts():void {
    this.ngOnInit();
  }
  
  ngOnInit(): void {
    let user = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 0
    this.http.get(`http://localhost:3000/twit/with-followers/${user}`).subscribe((res: any) => {
      this.posts = res.data
    })
  }

  
  search() {
    this.http.get(`http://localhost:3000/users/username/${this.searchText}`).subscribe((res: any) => {
     if (res.status === 200 ) {
       console.log('sucesso ao buscar: ', res[0].id_user)
     }
     this.router.navigate([`/profile/${res[0].id_user}`])
   }, error => {
     console.log('erro ao buscar: ', error)
   });
 }

}
