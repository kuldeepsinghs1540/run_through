import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categorys:any = undefined
  constructor(private http:HttpClient) { 
    this.loadCategory();
  }


private loadCategory() {
  this.http.get("http://localhost:8080/marbleServer/AllCategory")
  .subscribe((data:any)=>{
   // console.log(data);
    this.categorys = data;
  }); 
}

public save(data:any){
  this.http.post("http://localhost:8080/marbleServer/AddCategory",JSON.stringify(data))
  .subscribe((data:any)=>{
  if(data.status){
    //this.categorys.push(data.category)
  }
  });
}

}
