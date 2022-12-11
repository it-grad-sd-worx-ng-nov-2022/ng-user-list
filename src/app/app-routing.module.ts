import { UserListComponent } from './components/user-list/user-list.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'user', component:UserListComponent, children:[
    {path:'view/:id', component:UserDetailsComponent}]},

  {path:'', component:HomeComponent},
  {path:'user/:seed', component:UserListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
