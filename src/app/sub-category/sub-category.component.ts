import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../services/subcategory.service';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  constructor(public subcateService:SubcategoryService) {  }
    
  ngOnInit(): void {
  }
  
  savesubcategory(data:any){
   // console.log(data);
    this.subcateService.save(data)
     
  }
}
