import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserformComponent } from './userform/userform.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:"list",component:UserlistComponent},
  {path:"adduser",component:UserformComponent},
  {path:"edituser/:id",component:EdituserComponent},
  {path:"details/:id",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
