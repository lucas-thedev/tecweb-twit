import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { DatePicker } from '@syncfusion/ej2-calendars';


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
    perfil_pic: 'assets/Imagem_padrão_usuario.png',
    password: '',
    email: '',
    name: ''
  }
cssDate: string = 'Datepicker';
  passwordEyeImg = "assets/icons/eye-open.svg"
  passwordInputType = "password"
  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.passwordEyeImg = "assets/icons/eye-open.svg"
    this.passwordInputType = "password"
  }

 showOrHidePassword(): void {
    this.passwordEyeImg = this.passwordEyeImg === "assets/icons/eye-open.svg" ? "assets/icons/eye-closed.svg" :"assets/icons/eye-open.svg"  
    this.passwordInputType = this.passwordInputType === "password" ? "text" : "password"
  }

  validateSignup(password:string){
    let isvalid = false
    if (password.length >= 6 && password.length <=20 && password.match(/(?=.*[0-9])/) && password.match(/(?=[^A-Za-z]*[A-Za-z])[ -~]*$/)){
      isvalid = true
      return isvalid
    }
    this.toastr.error('A senha criada não atende os requisitos, tente novamente e atente-se as regras.')
    return isvalid
  }
  
  create() {
    if(this.validateSignup(this.person.password)){
      this.http.post('http://localhost:3000/users', this.person).subscribe((res: any) => {
        this.router.navigate(['/login']);
        this.toastr.success('Cadastro realizado.', 'Sucesso!')
      }, error => {
        console.log(error)
        this.toastr.error(error.error)
      });
    }
  }

  
  return() {
    this.router.navigate(['/login']);
  }

}
