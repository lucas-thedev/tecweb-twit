import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() { 
    this.http.post('http://localhost:3000/login', this.user).subscribe((res: any) => {
      if (res.status === 200 ) {
        
        sessionStorage.setItem("user", res.data[0].id_user);
        this.router.navigate(['/home']);
        this.toastr.success('Sucesso!', 'Login realizado.')
      }
    }, error => {
      this.toastr.error('Usuário e/ou senha incorretos.', 'Erro!' )
    });
  }

  signup() {
    this.router.navigate(['/signup']);
  }


}
