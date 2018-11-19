import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third-party modules
import { AngularFireModule } from 'angularfire2';
import { NgxSpinnerModule } from 'ngx-spinner';

// App modules
import { AuthModule } from './modulos/auth/auth.module';
import { DashboardModule } from './modulos/dashboard/dashboard.module';

// Environment

// Routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: '**', redirectTo: '/auth/login  '}
];

// App components
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Core modules
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // App modules
    AuthModule,
    DashboardModule,
    NgxSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
