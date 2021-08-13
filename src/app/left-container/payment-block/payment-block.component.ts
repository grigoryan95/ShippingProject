import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RightContainerServiceService} from "../../services/right-container-service.service";

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.scss']
})
export class PaymentBlockComponent implements OnInit {
  @Output() emitNextPage: EventEmitter<string> = new EventEmitter<string>()
  errorsText: string = ''
  form: FormGroup
  name: string = ''

  constructor(text: RightContainerServiceService) {
    this.errorsText = text.textError
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(16)
      ])
    })
  }

  ngOnInit(): void {
  }


  submit() {
    if (this.form.valid) {
      this.emitNextPage.emit('Thanks')
    }
  }
}
