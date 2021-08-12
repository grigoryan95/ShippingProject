import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paginator-light',
  templateUrl: './paginator-light.component.html',
  styleUrls: ['./paginator-light.component.scss']
})
export class PaginatorLightComponent implements OnInit {
  @Input() color = 'shipping'

  constructor() { }

  ngOnInit(): void {
  }

}
