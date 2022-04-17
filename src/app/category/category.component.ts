import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public cateService:CategoryService) { }

  ngOnInit(): void {
  }

  savecategory(data:any){
    console.log(data);
    this.cateService.save(data)
    
  }
}
