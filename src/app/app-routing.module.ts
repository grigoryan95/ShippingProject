import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormGroupBlockComponent} from "./left-container/form-group-block/form-group-block.component";
import {BillingBlockComponent} from "./left-container/billing-block/billing-block.component";
import {PaymentBlockComponent} from "./left-container/payment-block/payment-block.component";
import {ThankOrderComponent} from "./left-container/thank-order/thank-order.component";
import {ErrorComponent} from "./left-container/error/error.component";


const routes: Routes = [
  {path: '', component: FormGroupBlockComponent},
  {path: 'billing', component: BillingBlockComponent},
  {path: 'payment', component: PaymentBlockComponent},
  {path: 'thanks', component: ThankOrderComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
