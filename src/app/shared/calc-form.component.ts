import { Component, OnInit } from '@angular/core';
import { CalcFormProp } from '../data/calc-form-property';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'pm-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit{
  originalCalcForm: CalcFormProp = {
    bill: 0.00,
    tipslider: 0.00,
  }
  calcForm: CalcFormProp = { ...this.originalCalcForm };

  billAmt: number = 0.00;
  tax: number = this.calcForm.bill;
  tipPerc: number = 0.00;
  tipAmt: number = 0.00;
  total: number = 0.00;

  ngOnInit(){
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.value);
  }

  updateBill(): void {
    this.billAmt = this.calcForm.bill;
    this.tax = this.billAmt * 0.0314;
    this.tipPerc = this.calcForm.tipslider;
    this.tipAmt = (this.billAmt * this.calcForm.tipslider) / 100;
    this.total = Number(this.billAmt) + parseFloat(this.tax.toFixed(2)) + parseFloat(this.tipAmt.toFixed(2));
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
