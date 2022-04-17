import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"dashboard" , component:DashboardComponent},
  {path:"contact", component:ContactComponent},
  {path:"customer", component:CustomerComponent},
  {path:"category", component:CategoryComponent},
  {path:"subcategory", component:SubCategoryComponent},
  {path:"brand", component:BrandComponent},
  {path:"product", component:ProductComponent},
  {path:"", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
