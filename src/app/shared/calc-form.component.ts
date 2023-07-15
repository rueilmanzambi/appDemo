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
    name: "null",
    bill: 0,
    interfaceStyle: "null",
    subscriptionType: "null",
    tipslider: 0
  }

  calcForm: CalcFormProp = { ...this.originalCalcForm };

  ngOnInit(){
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
