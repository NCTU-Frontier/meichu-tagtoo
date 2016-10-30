import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http/http.service';
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

  items : number[] = [];
  avers : number[] = [];
  test : any[] = [5,2,3,4,2,1,6,3,6,3,78,342,5,23,12,45,34,763,345,2,12,11,32];

  constructor(private httpService: HttpService) {
    this.httpService.getData()
      .subscribe(
        data => {
          const myArr: any[] = [];
          for (let key in data) {
            myArr.push(data[key]);
          }
          for(let i=0;i<24;i++) {
            this.items.push(myArr[0][i][0]);
            this.avers.push(myArr[0][i][1]);
          }
        }
      );
    console.log(this.items);
    console.log(this.test);
    //tt : number[] = this.items;

  }

  options: Object;

  ngOnInit() {
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
        data: this.avers,
        stack: 0
      }]
    };
  }

}
