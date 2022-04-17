import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  public brands:any = undefined
  constructor(private http:HttpClient) { 
    this.loadBrands();
   }

   private loadBrands() { 
    this.http.get("http://localhost:8080/marbleServer/Allbrand")
    .subscribe((data:any)=>{
     // console.log(data);
      this.brands = data;
    }); 
  }

  public save(data:any){
    this.http.post("http://localhost:8080/marbleServer/Addbrand",JSON.stringify(data))
    .subscribe((data:any)=>{
    if(data.status){
      //this.categorys.push(data.category)
    }
    });
  }
}
