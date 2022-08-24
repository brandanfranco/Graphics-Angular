import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
})
export class DonaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'New Customer',
    'New Dealers',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 150, 300],
        backgroundColor: [
          '#A054E3',
          '#69EBFA',
          '#9DE354',
          '#E34246',
          '#E3CE42',
        ],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
