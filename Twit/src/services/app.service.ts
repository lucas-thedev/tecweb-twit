import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {IPost} from '../app/types/index'

@Injectable()
export class DataService {

  dataDefault: IPost = {
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

  private messageSource = new BehaviorSubject(this.dataDefault);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: IPost) {
    this.messageSource.next(message)
  }

}