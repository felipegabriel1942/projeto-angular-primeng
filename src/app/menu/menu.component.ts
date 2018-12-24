import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  
  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          routerLink: 'home'
      },
      {
        label: 'Usuario',
        routerLink: 'usuario'
      },
      {
        label: 'Estados',
        routerLink: 'estados'
    },
  ];
  }

}
