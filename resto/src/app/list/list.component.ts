import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private resto: RestoService) { }
collection:any={}
ngOnInit(): void {
  this.resto.saveResto().subscribe((result)=>{
    console.warn(result);
    this.collection=result;
  })
}
deleteDone(id:any ){
  // console.warn(id)
  this.resto.deleteData(id).subscribe((result)=>{
    // console.warn(result)
    this.ngOnInit();
  })
}
}
