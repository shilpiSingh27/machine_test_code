import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { employeeRoutingModule } from 'src/app/components/employees/employees.routes';
import { ReactiveFormsModule, FormsModule, NgForm, NgModel } from '@angular/forms';
import { InputTrimModule } from 'ng2-trim-directive';
import { EmployeesService } from 'src/app/components/employees/employees.service';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { FilterPipe } from 'src/app/components/employees/employee.filter';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CommonService } from 'src/app/shared/common.service';


@NgModule({
  imports: [
    CommonModule,
    employeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTrimModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule
  ],
  declarations: [
    EmployeeListComponent,
    FilterPipe,
    AddEmployeeComponent
  ],
  providers : [
    EmployeesService,
    NgForm,
    NgModel,
    CommonService
  ]
})
export class EmployeesModule { }
