import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  public subcategorys:any = undefined
  public categorysub:any = undefined
  constructor(private http:HttpClient , public router:Router) { 
    this.loadsubCategory();
    this.loadCategorysub();
  }

private loadsubCategory() {
    this.http.get("http://localhost:8080/marbleServer/Allsubcategory")
    .subscribe((data:any)=>{
     // console.log(data);
      this.subcategorys = data;
    });
  } 

  private loadCategorysub() {
    this.http.get("http://localhost:8080/marbleServer/AllCategory")
    .subscribe((data:any)=>{
     // console.log(data);
      this.categorysub = data;
    }); 
  }

public save(data:any){
    this.http.post("http://localhost:8080/marbleServer/Addsubcategory",JSON.stringify(data))
    .subscribe((data:any)=>{
    if(data.status){
      this.router.navigateByUrl("/subcategory")
      //this.subcategorys.push(data.subcategory)
    }

    });
  }
}
