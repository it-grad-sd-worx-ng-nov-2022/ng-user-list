import { UserListComponent } from './components/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path:'user', component:UserListComponent},
  {path:'user/view/:id', component:UserDetailsComponent},

  //redirect the user to the user page directly on startup. Thus setting the user page as the default page.
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
