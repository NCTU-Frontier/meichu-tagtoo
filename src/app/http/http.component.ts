import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-http',
  template: `
  `
})
export class HttpComponent implements OnInit {
  items : any[] = [];
  avers : any[] = [];

  constructor(private httpService: HttpService) { }

  ngGetPE() {
    return this.items;
  }

  ngGetAV() {
    return this.avers;
  }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        data => {
          const myArr : any[] = [];
          for (let key in data) {
            myArr.push(data[key]);
          }
          console.log(myArr[0]);
          for(let i=0;i<24;i++) {
            this.items.push(myArr[0][i][0]);
            this.avers.push(myArr[0][i][1]);
          }
        }
      );
  }
}
