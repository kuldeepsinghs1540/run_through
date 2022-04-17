import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public msg:string = ""
  constructor(public logService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  loginadmin(data:any){
    this.logService.loginad(data).subscribe((data:any)=>{
      if(data.status){
        this.logService.islogin = true;
        this.router.navigateByUrl("/dashboard")
      }else{
          this.msg = data.msg;
      }
    })
    
  }
}
