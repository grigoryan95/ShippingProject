import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RightContainerServiceService} from "../../services/right-container-service.service";

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.scss']
})
export class PaymentBlockComponent {
  @Output() emitNextPage: EventEmitter<string> = new EventEmitter<string>()
  errorsText: string = ''
  form: FormGroup
  name: string = ''

  constructor(text: RightContainerServiceService) {
    this.errorsText = text.textError
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
      this.emitNextPage.emit('Thanks')
    }
  }

  reset() {
    this.form.reset()
  }
}
