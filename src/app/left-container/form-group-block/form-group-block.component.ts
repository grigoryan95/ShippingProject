import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RightContainerServiceService} from "../../services/right-container-service.service";

@Component({
  selector: 'app-form-group-block',
  templateUrl: './form-group-block.component.html',
  styleUrls: ['./form-group-block.component.scss']
})
export class FormGroupBlockComponent implements OnInit {
  @Output() emitNextPage: EventEmitter<string> = new EventEmitter<string>()

  form: FormGroup
  errorsText: string = ''

  constructor(text: RightContainerServiceService) {
    this.errorsText = text.textError
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
    }
  }
}
