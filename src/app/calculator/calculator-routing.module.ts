import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorLayoutComponent } from './layout/calculator-layout/calculator-layout.component';
import { SumPageComponent } from './pages/sum-page/sum-page.component';
import { SubtractionPageComponent } from './pages/subtraction-page/subtraction-page.component';
import { DivisionPageComponent } from './pages/division-page/division-page.component';
import { MultiplicationPageComponent } from './pages/multiplication-page/multiplication-page.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorLayoutComponent,
    children: [
      { path: 'sum', component: SumPageComponent},
      { path: 'sub', component: SubtractionPageComponent},
      { path: 'div', component: DivisionPageComponent},
      { path: 'mult', component: MultiplicationPageComponent},
      { path: '**', redirectTo: 'sum'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
