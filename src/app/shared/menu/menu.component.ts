import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu: MenuItem[] = [
    {
      route: '/Graphics/BarChart',
      text: 'BarChart',
    },
    {
      route: '/Graphics/BarChartDouble',
      text: 'Bar-Chart-Double',
    },
    {
      route: '/Graphics/Dona',
      text: 'Dona',
    },
    {
      route: '/Graphics/DonaHttp',
      text: 'Dona-Http',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
