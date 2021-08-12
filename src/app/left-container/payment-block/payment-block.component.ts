import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.scss']
})
export class PaymentBlockComponent implements OnInit {
  @Output()emitNextPage: EventEmitter<string> = new EventEmitter<string>()

  form: FormGroup
  name: string = ''
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('',Validators.required),
      cardNumber: new FormControl('',[
        Validators.required,
        Validators.minLength(12)
      ])
    })
  }

  ngOnInit(): void {
  }



  submit() {
    if (this.form.valid) {
      console.log(1111,this.form)
      this.emitNextPage.emit('Thanks')
      const data = this.form.value
      console.log(222,data)
    }

  }
}
