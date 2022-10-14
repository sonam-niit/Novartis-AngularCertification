import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:"addproduct",component:AddProductComponent},
  {path:"list",component:ProductlistComponent},
  {path:"users",component:UserlistComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"userdetails/:id",component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
