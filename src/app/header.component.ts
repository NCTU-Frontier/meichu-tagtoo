import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
	<nav>
        <div class="nav-wrapper blue">
            <a href="#" class="brand-logo center">Mei-Chu Hackathon: Tagtoo</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><a href="#buyingPE">Buying PE</a></li>
                <li><a href="#touchPE">Touch PE</a></li>
                <li><a href="#indevidual">Indevidual</a></li>
            </ul>
        </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
