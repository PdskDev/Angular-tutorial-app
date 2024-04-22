import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-angular-01';
  welcomeMessage: string = "Bonjour les amis";
  inputMessage: string = "Merci de saisir un texte ici";
  colSpanValue: number = 3;
  messageAlerte: string = "Pourquoi tu cliques sur moi ?";

  showMessage(messageAlerte: string){
    alert(this.messageAlerte);
  }

  showMessageOnKeyPress(onKeyPressEvent: any){
    this.messageAlerte = onKeyPressEvent.target?.value;
    this.showMessage(this.messageAlerte);
  }

}
