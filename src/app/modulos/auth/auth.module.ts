import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// third-party modules
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Shared modules
import { SharedModule } from './shared/shared.module';

// Components
import { AuthenticationComponent } from './containers/authentication/authentication.component';

// Routes
export const ROUTES: Routes = [{
  path: 'auth',
  component: AuthenticationComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AuthenticationComponent]
})
export class AuthModule { }
