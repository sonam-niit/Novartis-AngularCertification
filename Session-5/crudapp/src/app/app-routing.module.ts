import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:"addproduct",component:AddProductComponent},
  {path:"list",component:ProductlistComponent},
  {path:"details/:id",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
