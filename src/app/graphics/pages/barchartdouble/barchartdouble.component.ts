import { Component, OnInit } from '@angular/core';

import { ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barchartdouble',
  templateUrl: './barchartdouble.component.html',
  styleUrls: ['./barchartdouble.component.css'],
})
export class BarchartdoubleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  barChartData: ChartData<'bar'> = {
    labels: ['2016', '2017', '2018', '2019', '2013', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Cars',
        backgroundColor: 'orange',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Sales',
        backgroundColor: 'blue',
      },
    ],
  };

  barChartData2: ChartData<'bar'> = {
    labels: ['2016', '2017', '2018', '2019', '2013', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'New Customers',
        backgroundColor: 'trans',
      },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Dealers' },
    ],
  };
}
