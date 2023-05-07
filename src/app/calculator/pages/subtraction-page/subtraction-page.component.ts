import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-subtraction-page',
  templateUrl: './subtraction-page.component.html',
  styleUrls: ['./subtraction-page.component.css']
})
export class SubtractionPageComponent {
  public myForm: FormGroup = this.fb.group({
    num1: [0, [Validators.required]],
    num2: [0, [Validators.required]],
    result: [0]
  })

  constructor( private fb: FormBuilder, private calculatorService: CalculatorService ) {}

  onSave():void {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const num1: number = parseInt(this.myForm.get('num1')!.value, 10);
    const num2: number = parseInt(this.myForm.get('num2')!.value, 10);
    const resultado: number = this.calculatorService.restar(num1, num2);
    this.myForm.get('result')!.setValue(resultado);

    console.log(this.myForm.value);


  }
}
