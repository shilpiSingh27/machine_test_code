import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from 'src/app/components/employees/employee-list/employee-list.component';

const employeeRoutes: Routes = [
    {
        path: '', component: EmployeeListComponent , children: [
              { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
      }
  ];

  export const employeeRoutingModule = RouterModule.forChild(employeeRoutes);
