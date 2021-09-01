import {Component} from '@angular/core';

@Component({
  selector: 'app-order-summary',
  template: `
    <div class="divOrder">
      <span class="orderSummary">Order Summary</span>
      <span class="editOrder">edit order</span>
    </div>
  `,
  styles: [`
    .orderSummary {
      font-size: 18px;
      color: #5A1094;
    }

    .editOrder {
      font-size: 12px;
      line-height: 14px;
      text-decoration: underline;
      color: #979797;
    }

    .divOrder {
      display: flex;
      justify-content: space-between;
      padding-top: 24px;
    }
  `]
})
export class OrderSummaryComponent {

}

