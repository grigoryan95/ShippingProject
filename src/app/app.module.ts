import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LeftContainerComponent} from './left-container/left-container.component';
import {RightContainerComponent} from './right-container/right-container.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {OrderSummaryComponent} from './right-container/order-summary/order-summary.component';
import {ReplayComponent} from './right-container/replay/replay.component';
import {ReplayFloorTextComponent} from './right-container/replay-floor-text/replay-floor-text.component';
import {OnlyFloorComponent} from './right-container/only-floor/only-floor.component';
import {PaginatorLightComponent} from './left-container/paginator-light/paginator-light.component';
import {FormGroupBlockComponent} from './left-container/form-group-block/form-group-block.component';
import {InputTextModule} from 'primeng/inputtext';
import {BillingBlockComponent} from './left-container/billing-block/billing-block.component';
import {PaymentBlockComponent} from './left-container/payment-block/payment-block.component';
import {ThankOrderComponent} from './left-container/thank-order/thank-order.component';
import {ErrorComponent} from './left-container/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftContainerComponent,
    RightContainerComponent,
    MainContainerComponent,
    OrderSummaryComponent,
    ReplayComponent,
    ReplayFloorTextComponent,
    OnlyFloorComponent,
    PaginatorLightComponent,
    FormGroupBlockComponent,
    BillingBlockComponent,
    PaymentBlockComponent,
    ThankOrderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class ApModule {
}
