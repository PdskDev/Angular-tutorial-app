import { Component } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  title = 'tutorial-angular-01';
  welcomeMessage: string = "Bonjour les amis";
  inputMessage: string = "Merci de saisir un texte ici";
  colSpanValue: number = 3;
  messageAlerte: string = "Pourquoi tu cliques sur moi ?";
  textSaisi:string="";
  estPresent: boolean = false;
  textBouton: string ="Afficher";
  listeDePays: string[] = ["Congo", "Gabon", "Cameroun", "Mali", "Sénégal", "France", "Italie"];

  showMessage(messageAlerte: string){
    alert(this.messageAlerte);
  }

  showMessageOnKeyPress(onKeyPressEvent: any){
    this.messageAlerte = onKeyPressEvent.target?.value;
    this.showMessage(this.messageAlerte);
  }

  afficherDOM(){
    this.estPresent = !this.estPresent;
    this.estPresent ? this.textBouton="Cacher le texte": this.textBouton="Afficher le texte";
  }


}
