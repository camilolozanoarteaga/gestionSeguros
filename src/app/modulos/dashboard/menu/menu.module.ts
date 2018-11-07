import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MenuComponent } from './container/menu/menu.component';

// Routes
export const ROUTES: Routes = [
  { path: '', component: MenuComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
