import { Component } from '@angular/core';

interface User {
  firstName: string,
  lastName: string
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  user: User = {
    firstName: 'Nadet',
    lastName: 'Dev'
  }

  onSubmit(formValue: any){
    console.log(formValue)
  }


}
