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
    background: #5A1094;
    color: white;
    width: 180px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid rgba(67, 28, 93, 0.8);
    cursor: pointer;
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
