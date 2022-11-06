import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})


export class RestoService {
url="http://localhost:3000/posts"
rootUrl="http://localhost:3000/register"
  constructor(private  http: HttpClient) { }

addList(data:any){
   return this.http.post(this.url , data)
}
 
saveResto(){
  return this.http.get(this.url)
}

registerUser(data:any){
  return this.http.post(this.rootUrl+"register" ,data)
}

getUpdateById(id:any){
  return this.http.get( `${this.url}/${id} `)
}
updateDataPut(id:any,data:any){
  return this.http.put( `${this.url}/${id} `, data)
}
deleteData(id:any){
  return this.http.delete(`${this.url}/${id} `)
}
}
