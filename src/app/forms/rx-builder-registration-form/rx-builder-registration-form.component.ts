import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/helpers/custom-validators';

@Component({
  selector: 'app-rx-builder-registration-form',
  templateUrl: './rx-builder-registration-form.component.html',
  styleUrls: ['./rx-builder-registration-form.component.css']
})
export class RxBuilderRegistrationFormComponent implements OnInit{
  EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";

  registrationFormFbuilder!: FormGroup;

  constructor(public formBuilder: FormBuilder){}

  ngOnInit(): void {
      this.registrationFormFbuilder = this.formBuilder.group({
        firstName: ['Nadet', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
        password: ['', [Validators.required, CustomValidators.passwordValidityCheck]],
        confirmPassword: ['', [Validators.required, CustomValidators.passwordValidityCheck]],
        address: this.formBuilder.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          zip: ['', Validators.required],
          state: ['', Validators.required],
          country: ['', Validators.required]
        })
      }, {validator: CustomValidators.passwordMatcher});
  }

  onSubmit(formValues: any){
    console.log(formValues);
    console.log(this.registrationFormFbuilder.value);
  }

}
