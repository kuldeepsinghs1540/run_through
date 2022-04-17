import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }
 
  saveproduct(data:any){
    console.log(data);
    this.productService.save(data)
    
  }

}
