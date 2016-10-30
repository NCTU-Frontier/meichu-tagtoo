import { Component, OnInit } from '@angular/core';
import * as Highcharts3d from 'highcharts-3d';

@Component({
  selector: 'app-category',
  template: `
    <chart [options]="options"></chart>
  `,
  styles: []
})
export class CategoryComponent implements OnInit {

  constructor() {
    this.options={
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
      },
      plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
      },
      series: [{
          data: [
            ['Bananas', 8],
            ['Reddish (bag)', 1],
            ['Grapes (bunch)', 1]
        ]
    }]
    }
  }
  options: Object;

  ngOnInit() {
  }

}
