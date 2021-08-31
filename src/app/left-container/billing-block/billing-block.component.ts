import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RightContainerServiceService} from "../../services/right-container-service.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-billing-block',
  templateUrl: './billing-block.component.html',
  styleUrls: ['./billing-block.component.scss']
})
export class BillingBlockComponent implements OnInit{
  @Output() eventNextPage: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup;
  errorsText: string = '';
  rout: any;
  obj: any;

  constructor(
    private text: RightContainerServiceService,
    private router: Router,
    private _router:ActivatedRoute
  ) {
    this.rout = router;
    this.errorsText = text.textError;
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^\S*$/),
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S*$/)
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'.trim()
        )]),
      zip: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this._router.queryParams.subscribe(data => {
      this.obj = data;
    })
  }


  submit() {
    if (this.form.valid) {
      this.eventNextPage.emit('payment');
      this.rout.navigate(['/payment']);
      this.form.reset();
    }
  }

  reset() {
    this.form.reset();
  }

  addInformation() {
    this.form.controls.fullName.setValue(this.obj.fullName);
    this.form.controls.address.setValue(this.obj.address)
    this.form.controls.city.setValue(this.obj.city)
    this.form.controls.zip.setValue(+this.obj.zip)
  }

}
