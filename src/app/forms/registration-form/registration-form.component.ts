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
  EMAIL_REGEX = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  PASSWORD_STRENGTH_REGEX = "(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}";

  user: User = {
    firstName: 'Nadet',
    lastName: 'Dev'
  }

  onSubmit(formValue: any){
    console.log(formValue)
  }


}
