import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error',
  template: `
    <div>
      <h1>no such page exists</h1>
      <h2>Error 404</h2>
      <button (click)="rout()">Back shipping page</button>
      <span><--Click</span>
    </div>
  `,
  styles: [`div {
    color: red;
    margin: 50px;
  }
  button {
    color: #fe3589;
    cursor: pointer;
    font-size: 20px;
  }
    span {
      margin-left: 10px;
    }
  `]
})
export class ErrorComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit(): void {
  }

  rout() {
    this.route.navigate(['/'])
  }
}
