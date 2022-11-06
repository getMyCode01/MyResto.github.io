import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor( private resto: RestoService) { }
 alert:boolean=false
  ngOnInit(): void {
   
  }
  addResto=new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl('')
   })

   collection(){
      this.resto.addList(this.addResto.value).subscribe((result)=>{
        console.warn(result)
        this.addResto.reset();
        this.alert=true
      })
   }
   clickMe(){
    this.alert=false
   }

}
