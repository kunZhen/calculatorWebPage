import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sum-page',
  templateUrl: './sum-page.component.html',
  styleUrls: ['./sum-page.component.css']
})
export class SumPageComponent {

  public myForm: FormGroup = this.fb.group({
    num1: [0, [Validators.required]],
    num2: [0, [Validators.required, Validators.min(1)]],
    result: [0]
  })


  constructor( private fb: FormBuilder ) {}

  ngOnInit() {
    this.myForm.get('num1')!.valueChanges.subscribe(val => {
      const num2Val = this.myForm.get('num2')!.value;
      const result = val + num2Val;
      this.myForm.controls['result'].setValue(result);
    });

    this.myForm.get('num2')!.valueChanges.subscribe(val => {
      const num1Val = this.myForm.get('num1')!.value;
      const result = num1Val + val;
      this.myForm.controls['result'].setValue(result);
    });
  }

  onSave():void {

    if (this.myForm.invalid) return;

    this.myForm.controls['result'].value;

    console.log(this.myForm.value);
  }

}
