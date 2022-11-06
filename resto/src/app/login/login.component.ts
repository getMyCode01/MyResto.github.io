import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm!:FormGroup
  constructor( private resto : RestoService , private http:HttpClient , private route :Router) { }

  ngOnInit(): void {
   this.loginForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')

    })
  }
 login(){
  this.http.get<any>("http://localhost:3000/register").subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    })
    if(user){
      alert("Login Sucess")
      this.loginForm.reset()
      this.route.navigate(['list'])
    } else{
      alert("user not found")
    }
})
 }
}
