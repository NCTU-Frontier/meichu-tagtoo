import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  template: `
  `
})
export class HttpComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

}
