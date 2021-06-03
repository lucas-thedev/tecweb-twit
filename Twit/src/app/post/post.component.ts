import { Component, Input, OnInit } from '@angular/core';
import {IPost} from '../types/index'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {


  @Input() posts: IPost[] = [];
  storage = []

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    
  }

  updateLikeCount(index: number) {
    this.posts[index].count_likes = this.posts[index].count_likes === 1 ? 0 : 1;
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

}