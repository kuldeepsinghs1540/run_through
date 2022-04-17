import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
}) 
export class CustomerService {
  public updatemsg:string = ""
  public customers:any = undefined
  public isCustUpdate:boolean = false
  constructor(private http:HttpClient , private router:Router) { 
      this.loadusers();
     }
  private loadusers() {
      this.http.get("http://localhost:8080/marbleServer/AllUser")
      .subscribe((data:any)=>{
        //console.log(data);
        this.customers = data;
      }); 
    }
    public save(data:any){
      this.http.post("http://localhost:8080/marbleServer/addUser",JSON.stringify(data))
      .subscribe((data:any)=>{
      if(data.status){
        console.log(data.customer + "update");
        //this.customers.push(data.customer)
        this.updatemsg = data.msg;
        this.isCustUpdate = true;
        this.router.navigateByUrl("/customer")
      }else{
          this.updatemsg = data.msg;
      } 
    });
    }
}
