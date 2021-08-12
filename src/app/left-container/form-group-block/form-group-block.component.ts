import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-group-block',
  templateUrl: './form-group-block.component.html',
  styleUrls: ['./form-group-block.component.scss']
})
export class FormGroupBlockComponent implements OnInit {
  @Output() emitNextPage: EventEmitter<string> = new EventEmitter<string>()

  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      atpSuite: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.emitNextPage.emit('billing')
      console.log(1111, this.form)
      const data = {...this.form.value}
      console.log(data)
    }

  }
}
