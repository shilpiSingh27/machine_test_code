import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeesService } from 'src/app/components/employees/employees.service';
import { BsModalService } from 'ngx-bootstrap';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  updateEmployeeDetailForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  employees: { 'id': number; 'name': string; 'phone': string; 'address': { 'city': string; 'address_line1': string; 'address_line2': string; 'postal_code': string; }; }[];
  employee: Employee;
  addressForm: FormGroup;
  modalRef: any;
  selectedEmp: any;
  selectedEmpCopy: any;
  addEmpView: boolean;
  filteredStatus = '';

  constructor(private empService: EmployeesService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private commonService: CommonService) { }

  ngOnInit() {
    this.employees = this.empService.getEmpData();
    this.initFormViewModal();
  }

  addEmpViewHandler(addEmpView: boolean) {
    this.addEmpView = addEmpView;
  }

  // open modal
  public updateEmpModal(template: TemplateRef<any>, employee) {
    this.modalRef = this.modalService.show(template);
    console.log(employee);
    this.selectedEmp = employee;
  }
  // close modal
  close() {
    this.modalRef.hide();
  }

  initFormViewModal() {
    this.addressForm = this.fb.group({
      address1: ['', [Validators.required]],
      address2: ['', ''],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ' . \s]+$/)]],
      postalCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z0-9_\s.-]*$/)]],
    });
    this.updateEmployeeDetailForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z /s ']*$/)]],
      address: this.addressForm,
      phone: ['', [Validators.required, Validators.pattern(/^[0-9-() +]*$/)]],
    });
  }

  updateEmployeeDetail() {
    // check form-based validation
    if (!this.updateEmployeeDetailForm.valid) {
      this.commonService.validateAllFormFields(this.updateEmployeeDetailForm);
      return false;
    } else {
    this.empService.empDataList.push(this.selectedEmp);
  }
}

}
