import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:"about",component:AboutComponent,children:[
    {path:'',redirectTo:'child-a',pathMatch:'full'},
    {path:'child-a',component:ChildAComponent},
    {path:'child-b',component:ChildBComponent}
  ]},
  {path:"contact",component:ContactComponent},
  {path:'details/:id',component:DetailsComponent},

  {path:"**",component:PageNotFoundComponent} //Windcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
