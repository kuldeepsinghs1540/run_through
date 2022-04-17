import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
  }

  savecustomer(data:any){
    console.log(data);
    this.customerService.save(data)
    
  }


}
