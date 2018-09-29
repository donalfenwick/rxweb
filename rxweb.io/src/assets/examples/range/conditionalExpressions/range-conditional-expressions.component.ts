import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';

@Component({
    selector: 'app-range-conditionalExpressions',
    templateUrl: './range-conditional-expressions.component.html'
})
export class RangeConditionalExpressionsComponent implements OnInit {

    employeeInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }
}
