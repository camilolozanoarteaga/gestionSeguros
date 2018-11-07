import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third-party modules
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Shared modules
// import { SharedModule } from './shared/shared.module';

// components
import { DashboardComponent } from './containers/dashboard/dashboard.component';

// Routes
export const ROUTES: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'menu' },
    { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
    { path: 'admin-users', loadChildren: './admin-users/admin-users.module#AdminUsersModule' },
    { path: 'policy', loadChildren: './policy/policy.module#PolicyModule' },
    { path: 'admin-sys', loadChildren: './admin-sys/admin-sys.module#AdminSysModule' }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
