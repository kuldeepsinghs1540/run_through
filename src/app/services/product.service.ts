import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public updateprodmsg:string = ""
  public products:any = undefined
  public isproductUpdate:boolean = false
  constructor(private http:HttpClient , private router:Router) { 
    this.loadproducts();
  }

  private loadproducts() {
    this.http.get("http://localhost:8080/marbleServer/Allproduct")
    .subscribe((data:any)=>{
      //console.log(data);
      this.products = data;
    });
  }

  public save(data:any){
    this.http.post("http://localhost:8080/marbleServer/Addproduct",JSON.stringify(data))
    .subscribe((data:any)=>{
    if(data.status){
      console.log(data.customer + "update");
      //this.customers.push(data.customer)
      this.updateprodmsg = data.msg;
      this.isproductUpdate = true;
      this.router.navigateByUrl("/product")
    }else{
        this.updateprodmsg = data.msg;
    } 
  });
  }

}
