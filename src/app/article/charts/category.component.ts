import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
    <chart [options]="options"></chart>
  `,
  styles: []
})
export class CategoryComponent implements OnInit {

  constructor() {

  }

  options: Object;

  ngOnInit() {
  }

}
