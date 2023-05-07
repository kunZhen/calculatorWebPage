import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SumPageComponent } from './pages/sum-page/sum-page.component';
import { DivisionPageComponent } from './pages/division-page/division-page.component';
import { MultiplicationPageComponent } from './pages/multiplication-page/multiplication-page.component';
import { SubtractionPageComponent } from './pages/subtraction-page/subtraction-page.component';
import { CalculatorLayoutComponent } from './layout/calculator-layout/calculator-layout.component';


@NgModule({
  declarations: [
    SideMenuComponent,
    SumPageComponent,
    DivisionPageComponent,
    MultiplicationPageComponent,
    SubtractionPageComponent,
    CalculatorLayoutComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
