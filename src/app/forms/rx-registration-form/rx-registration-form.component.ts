import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rx-registration-form',
  templateUrl: './rx-registration-form.component.html',
  styleUrls: ['./rx-registration-form.component.css']
})
export class RxRegistrationFormComponent implements OnInit{
  EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";
  registrationForm!: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('Nadet', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required)
      })
    })
  }

  onSubmit(formValues: any){
    console.log(formValues);
    console.log(this.registrationForm.value);
  }


}
