import { Component, Input, OnInit } from '@angular/core';
import {IPost} from '../types/index'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [DatePipe]
})

export class PostComponent implements OnInit {

  liked = 0;
  countlikes = 0;
  @Input() posts: IPost[]= [];
  @Input() updatePosts: Function = () => console.log('updated');
  storage = []

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private datePipe: DatePipe) { 
  }

  ngOnInit(): void {
    setTimeout(() => {
      const idPost = this.posts[0].id_twiit 
    const idUser = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 0  
    this.http.get(`http://localhost:3000/liked/${idUser}/${idPost}`).subscribe((response: any) => {
      this.liked = response[0].liked
    }, error => {
      console.log(error)
      this.toastr.error(error.error)
    });
    this.http.get(`http://localhost:3000/like/count/${idPost}`).subscribe((response: any) => {
        this.countlikes= response[0].count

    }, error => {
      console.log(error)
      this.toastr.error(error.error)
    });
    }, 1000 );
  }

  retwitt(post: IPost): void {
    const idTwiit = post.id_twiit
    const idTwiitUser = post.id_user
    const idUser = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 0

    const body = {
      idTwiit,
      idTwiitUser,
      idUser: idUser ? parseInt(idUser) : idUser
    }

      this.http.post('http://localhost:3000/retwiit', body).subscribe((res: any) => {
        this.toastr.success('Retwiit realizado.', 'Sucesso!')
      }, error => {
        console.log(error)
        this.toastr.error(error.error)
      });

  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss', "GMT-6") || "";
  }

  like(post: IPost) {
    const idPost = post.id_twiit
    const idUser = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 0


    this.http.post(`http://localhost:3000/like/${idUser}/${idPost}`, {}).subscribe((res: any) => {
      const data = res[0]
      this.http.get(`http://localhost:3000/liked/${idUser}/${idPost}`).subscribe((response: any) => {
      this.liked = response[0].liked
    }, error => {
      console.log(error)
      this.toastr.error(error.error)
    });
      this.http.get(`http://localhost:3000/like/count/${idPost}`).subscribe((response: any) => {
        this.countlikes= response[0].count

    }, error => {
      console.log(error)
      this.toastr.error(error.error)
    });
    }, error => {
      console.log(error)
      this.toastr.error(error.error)
    });

    

    if (this.updatePosts) {
      this.updatePosts()
    }
  }

}