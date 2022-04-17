import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public islogin:boolean = false
  constructor(private http:HttpClient) { }

  public loginad(data:any){
    // var frmData = new FormData();
    // frmData.append('Email',data.Email);
    // frmData.append('Password',data.Password);
    // console.log(frmData.get('Email')+ " " +frmData.get('Password'))
   return this.http.post("http://localhost:8080/marbleServer/AdminLogin",JSON.stringify(data))
    
  }
}
