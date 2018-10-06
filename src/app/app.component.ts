import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: any;
  constructor() {
    this.contact = {
      name: ``,
      email: ``,
      company: ``,
      role: ``,
      twitter: ``,
      location: ``,
      notes: ``
    }
  }
  title = 'address-book-angular';
  createNewContact() {
    console.log('Something clicked me!!!')
  }
}
