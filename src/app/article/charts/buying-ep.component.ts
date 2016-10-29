import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buying-ep',
  template: `
    <chart [options]="options"></chart>
  `,
  styles: []
})
export class BuyingEPComponent implements OnInit {
  options: Object;

  constructor() {
    this.options = {
      title : { text : 'buying EP' },
      chart : {
        type: 'column',
        margin: 75,
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 700
        }
      },
      plotOptions: {
        column: {
          depth: 60,
          stacking: true,
          grouping: false,
          groupZPadding: 100
        }
      },
      series: [{
        name: "0~1",
        data: [1, 2, 4, 3, 2, 4],
        stack: 0
      }, {
        name: "1~2",
        data: [5, 6, 3, 4, 1, 2],
        stack: 1
      }, {
        name: "2~3",
        data: [7, 9, 8, 7, 5, 8],
        stack: 2
      }, {
        name: "3~4",
        data: [7, 9, 8, 7, 5, 8],
        stack: 3
      }]
    };
  }

  ngOnInit() {
  }

}
