import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  person = {
    username: '',
    created_at: '',
    biograph: '',
    birthday: '',
    perfil_pic: 'assets/girl.png',
    password: '',
    email: '',
    name: ''
  }

  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  
  create() {
    this.http.post('http://localhost:3000/users', this.person).subscribe((res: any) => {
      this.router.navigate(['/login']);
      this.toastr.success('Cadastro realizado.', 'Sucesso!')
    }, error => {
      this.toastr.error('Houve algum erro. Tente mais tarde.')

    });
    
  }

  
  return() {
    this.router.navigate(['/login']);
  }

}
