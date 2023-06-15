import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    UserDetailsComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
