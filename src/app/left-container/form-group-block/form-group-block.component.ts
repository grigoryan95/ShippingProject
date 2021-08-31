import {Component,OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RightContainerServiceService} from "../../services/right-container-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-group-block',
  templateUrl: './form-group-block.component.html',
  styleUrls: ['./form-group-block.component.scss']
})
export class FormGroupBlockComponent implements OnInit{

  form: FormGroup;
  errorsText: string = '';
  rout: any;
  dataInfo: object | undefined;


  constructor(
    private text: RightContainerServiceService,
    private router: Router
  ) {
    this.rout = router;
    this.errorsText = text.textError;
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('',[
        Validators.pattern(/^\S*$/),
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'.trim())
      ]),
      zip: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }


  submit() {
    this.dataInfo =  this.form.value
    if (this.form.valid) {
      this.rout.navigate(['/billing'],{queryParams: this.dataInfo});
    }
  }

  reset() {
    this.form.reset();
  }


}
