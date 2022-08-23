import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

import * as ChartsModule from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
})
export class BarchartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2022'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 70],
        label: 'Series A',
        backgroundColor: '#FADA55',
        hoverBackgroundColor: 'red',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90, 30],
        label: 'Series B',
        backgroundColor: '#4B78D6',
        hoverBackgroundColor: 'red',
      },
      {
        data: [50, 28, 60, 19, 36, 57, 50, 90],
        label: 'Series C',
        backgroundColor: '#15C157',
        hoverBackgroundColor: 'red',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),
    ];
    this.chart?.update();
  }
}
