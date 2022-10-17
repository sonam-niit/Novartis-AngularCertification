import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userform/userform.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { CustomerModule } from './customer/customer.module';
import { Highlight } from './shared/mydirective';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserformComponent,
    EdituserComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    CustomerModule,
    SharedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
