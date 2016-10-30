import { Component, OnInit } from '@angular/core';
import { HttpComponent } from '../../http/http.component';
import { Highcharts } from 'angular2-highcharts';
import {Http} from "@angular/http";
//import * as Highcharts3d from 'highcharts-3d';

@Component({
  selector: 'app-buying-ep',
  template: `
    <chart [options]="options"></chart>
  `,
  styles: ['chart { display: block; }']
})
export class BuyingEPComponent implements OnInit {

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
          depth: 70
        }
      },
      yAxis:{
        title:{
          text:"try try tese"
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
        name: "Middle Point",
        data: [1,2,3],
        stack: 0
      }]
    };
  }

  options: Object;

  ngOnInit() { }

}
