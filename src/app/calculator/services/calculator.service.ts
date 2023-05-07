import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sumar(num1: number, num2: number) {
    console.log('SUMA: ', num1, " y ", num2 );
    return num1 + num2;
  }

  restar(num1: number, num2: number) {
    console.log('RESTA: ', num1, " y ", num2 );
    return num1 - num2;
  }

  division(num1: number, num2: number) {
    console.log('DIVISION: ', num1, " y ", num2 );
    return num1 / num2;
  }

  multiplicacion(num1: number, num2: number) {
    console.log('MULTIPLICACION: ', num1, " y ", num2 );
    return num1 * num2
  }
}
