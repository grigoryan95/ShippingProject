import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RightContainerServiceService} from "../../services/right-container-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.scss']
})
export class PaymentBlockComponent {
  @Output() emitNextPage: EventEmitter<string> = new EventEmitter<string>()
  errorsText: string = '';
  form: FormGroup;
  name: string = '';
  rout: any;
  constructor(
    text: RightContainerServiceService,
    router: Router
  ) {
    this.rout = router;
    this.errorsText = text.textError;
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z]+$'.trim())
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S*$/),
        Validators.minLength(16)
      ]),
      expireDate: new FormControl('',[
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        Validators.minLength(4)
      ]),
      securityCode: new FormControl('',[
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        Validators.minLength(3)
      ])
    })
  }

  submit() {
    if (this.form.valid) {
      this.emitNextPage.emit('Thanks');
      this.rout.navigate(['/thanks']);
    }
  }

  reset() {
    this.form.reset();
  }

  changInputBack() {
    let masterCard = +this.form.value.cardNumber.toString().slice(0, 2);
    const visaCard = +masterCard.toString().slice(0,1);
    const input =  (<HTMLElement>document.querySelector('.test'));
    if (visaCard === 4){
      input.style.backgroundImage = 'url("https://www.freeiconspng.com/thumbs/visa-icon/visa-icon-0.png")'
    } else if (
         masterCard === 51
      || masterCard === 52
      || masterCard === 53
      || masterCard === 54
      || masterCard === 55
    ) {
      input.style.backgroundImage = 'url("https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Symbol.jpg")'
    } else if (masterCard === 37) {
      input.style.backgroundImage = 'url("https://download.logo.wine/logo/American_Express/American_Express-Logo.wine.png")'
    } else {
      input.style.backgroundImage = 'none'
    }
  }

}
