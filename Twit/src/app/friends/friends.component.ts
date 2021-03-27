import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  amigos = [{
   nome:"Pedro Fabriciano", foto:"../../assets/boy.png" 
  },{
    nome:"Daniel Oliveira", foto:"../../assets/images/V.png"
  },{
    nome:"Julio Silva", foto:"../../assets/boy.png"
  },{
    nome:"Henrique Almeida", foto:"../../assets/boy.png"
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
