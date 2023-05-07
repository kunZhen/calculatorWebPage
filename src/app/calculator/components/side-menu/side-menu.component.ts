import { Component } from '@angular/core';

interface MenuItem {
  name : string;
  route: string;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { route: 'calculator/sum', name: 'Suma'},
    { route: 'calculator/sub', name: 'Resta'},
    { route: 'calculator/mult', name: 'Multiplicación'},
    { route: 'calculator/div', name: 'División'}
  ]
}
