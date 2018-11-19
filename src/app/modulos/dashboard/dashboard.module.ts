import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third-party modules
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



// Shared modules
// import { SharedModule } from './shared/shared.module';

// components
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AuthGuard } from '../auth/shared/guards/auth.guard';

// Routes
export const ROUTES: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    { path: '', canActivate: [AuthGuard], pathMatch: 'full', redirectTo: 'menu' },
    { path: 'menu', canActivate: [AuthGuard], loadChildren: './menu/menu.module#MenuModule' },
    { path: 'admin-users', canActivate: [AuthGuard], loadChildren: './admin-users/admin-users.module#AdminUsersModule' },
    { path: 'policy', canActivate: [AuthGuard], loadChildren: './policy/policy.module#PolicyModule' },
    { path: 'admin-sys', canActivate: [AuthGuard], loadChildren: './admin-sys/admin-sys.module#AdminSysModule' },
    { path: 'clients', canActivate: [AuthGuard], loadChildren: './clients/clients.module#ClientsModule' },
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxSpinnerModule,
    NgbDropdownModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
