import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: any;
  contacts: any[] = [];
  title = 'Address Book Challenge'

  constructor() {
    this.initContact();
  }

  createNewContact() {
    debugger;
    console.log(`Creating the following contact: ${JSON.stringify(this.contact)}`);
    this.contacts.push(this.contact);
    this.initContact();
  }

  private initContact() {
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
}
