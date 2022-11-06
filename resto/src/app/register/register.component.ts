import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMe!: FormGroup
  constructor( private resto : RestoService , private http:HttpClient , private route:Router ) { }
  
  ngOnInit(): void {
    this.registerMe= new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl('')
    })
  }
  collection(){
       this.http.post("http://localhost:3000/register", this.registerMe.value).subscribe(res=>{
        alert("Registerd Successfully...!")
        this.registerMe.reset();
        this.route.navigate(['login'])
       })
  }
  
   
   }


