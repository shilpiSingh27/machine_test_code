import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeesService } from 'src/app/components/employees/employees.service';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmpForm: FormGroup;
  addressForm: FormGroup;

  @Output() addEmpViewChange = new EventEmitter();
  public addEmpView = false;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeesService,
    private commonService: CommonService
) { }

  ngOnInit() {
  }

  closeAddEmpView() {
    this.addEmpViewChange.emit(this.addEmpView);
    this.addEmpForm.reset();
  }

  initFormViewModal() {
    this.addressForm = this.fb.group({
      address1: ['', [Validators.required]],
      address2: ['', ''],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ' . \s]+$/)]],
      postalCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z0-9_\s.-]*$/)]],
    });
    this.addEmpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z /s ']*$/)]],
      address: this.addressForm,
      phone: ['', [Validators.required, Validators.pattern(/^[0-9-() +]*$/)]],
    });
  }

  addEmployee() {
    // check form-based validation
    if (!this.addEmpForm.valid) {
      this.commonService.validateAllFormFields(this.addEmpForm);
      return false;
    } else {
    this.empService.empDataList.push(this.addEmpForm.value);
  }
}

}
