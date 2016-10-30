import {Component, OnInit, AfterContentInit, AfterViewChecked} from '@angular/core';
import { HttpService } from '../../http/http.service';

@Component({
  selector: 'app-buying-ep',
  template: `
    <chart [options]="options"></chart>
  `,
  styles: ['chart { display: block; }']
})
export class BuyingEPComponent {

  items : any[] = [];
  avers : any[] = [];

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
          }
        }
      );
  }

  options: Object;


}
