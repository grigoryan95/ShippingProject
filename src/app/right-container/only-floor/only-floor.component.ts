import {Component} from '@angular/core';

@Component({
  selector: 'app-only-floor',
  template: `
    <div class="floorText">
      <span>All purchases are subject to our Terms and Conditions.</span>
    </div>
  `,
  styles: [`
    .floorText {
      font-size: 10px;
      line-height: 12px;
      color: #9C9C9C;
      display: flex;
      justify-content: flex-end;
      margin-top: 170px;
      padding: 0 10px;
    }
  `]
})
export class OnlyFloorComponent {

}
