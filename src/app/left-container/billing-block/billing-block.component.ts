import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RightContainerServiceService} from "../../services/right-container-service.service";

@Component({
  selector: 'app-billing-block',
  templateUrl: './billing-block.component.html',
  styleUrls: ['./billing-block.component.scss']
})
export class BillingBlockComponent {
  @Output() eventNextPage: EventEmitter<string> = new EventEmitter<string>()

  form: FormGroup
  errorsText: string = ''

  constructor(text: RightContainerServiceService) {
    this.errorsText = text.textError
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z]+$'.trim())
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^\S*$/)
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S*$/)
      ]),
      atpSuite: new FormControl('', Validators.required),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'.trim()
        )]),
      zip: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.form.valid) {
      this.eventNextPage.emit('payment')
      this.form.reset()
    }
  }

  reset() {
    this.form.reset()
  }
}
