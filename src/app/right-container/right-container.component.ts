import {Component} from '@angular/core';

@Component({
  selector: 'app-right-container',
  template: `
    <div class="rightContainer">
    <app-order-summary></app-order-summary>
    <app-replay></app-replay>
    <app-replay-floor-text></app-replay-floor-text>
    <app-only-floor></app-only-floor>
  </div>
  `,
  styles: [`
    .rightContainer {
    width: 300px;
    height: 597px;
    background: #E6E9F0;
    border-radius: 0 5px 5px 0;
    padding: 0 10px 0 6px;
  }
  `]
})
export class RightContainerComponent {

}
