import {ModuleWithProviders, NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// canActivate: [AuthGuard]
export const appRoutes: Routes = [
  { path: '', loadChildren: '../../src/app/components/employees/employees.module#EmployeesModule' },
];


export const appRouterModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
