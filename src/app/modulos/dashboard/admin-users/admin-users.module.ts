import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Third-party modules

// Shared modules
import { SharedModule } from '../shared/shared.module';

// Components
import { AdminUsersComponent } from './containers/admin-users/admin-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';

export const ROUTES: Routes = [
  { path: '', component: AdminUsersComponent },
  { path: 'update', component: UpdateUsersComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    SharedModule.forRoot()
  ],
  declarations: [AdminUsersComponent, ListUsersComponent, CreateUserComponent, UpdateUsersComponent]
})
export class AdminUsersModule { }
