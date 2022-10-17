import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomerlistComponent,
    CustomerformComponent,
    CustomerdetailsComponent,
    EditcustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  exports:[
    CustomerlistComponent,
    CustomerformComponent,
    CustomerdetailsComponent,
    EditcustomerComponent
  ]
})
export class CustomerModule { }
