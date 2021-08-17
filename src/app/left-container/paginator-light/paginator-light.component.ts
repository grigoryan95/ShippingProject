import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-paginator-light',
  templateUrl: './paginator-light.component.html',
  styleUrls: ['./paginator-light.component.scss']
})
export class PaginatorLightComponent {
  @Input() color = 'shipping'
}


