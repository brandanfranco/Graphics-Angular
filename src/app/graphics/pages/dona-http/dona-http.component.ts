import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css'],
})
export class DonaHttpComponent implements OnInit {
  constructor(private serviceUser: GraphicsService) {}

  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
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

  ngOnInit() {
    this.serviceUser.getUsers().subscribe((resp) => {
      this.doughnutChartData = {
        labels: Object.keys(resp),
        datasets: [{ data: Object.values(resp) }],
      };
    });
  }
}
