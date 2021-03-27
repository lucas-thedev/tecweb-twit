import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  amigos = [{
   nome:"Pedro Fabriciano", foto:"../../assets/boy.png" , msg: 'Olá, Boa noite!'
  },{
    nome:"Daniel Oliveira", foto:"../../assets/images/V.png", msg: 'Bom dia, tudo bem ?'
  },{
    nome:"Julio Silva", foto:"../../assets/boy.png", msg: 'Pode ser às 8h?'
  },{
    nome:"Henrique Almeida", foto:"../../assets/boy.png", msg: 'Ok.'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
