import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert:boolean=false

  constructor( private resto:RestoService , private router :ActivatedRoute) { }
  updateResto=new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl('')
   })
  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
  this.resto.getUpdateById(this.router.snapshot.params['id']).subscribe((result:any)=>{
    console.warn(result);
    this.updateResto=new FormGroup({
      name : new FormControl(result['name']),
      email : new FormControl(result['email']),
      address : new FormControl(result['address'])
     })
  }
  )
  }
  updateDtata(){
    // console.warn(this.updateResto.value)
    this.resto.updateDataPut(this.router.snapshot.params['id'],this.updateResto.value).subscribe((result)=>{
      console.warn(result)
      this.alert=true
      this.updateResto.reset();
    })
  }
  clickMe(){
    this.alert=false
  }

}
