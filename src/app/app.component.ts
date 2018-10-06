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
      name: `Tom Hardy`,
      email: `tom@hardy.com`,
      company: `Paramount Pictures`,
      role: `Lead Actor`,
      twitter: `Tom__Hardy_`,
      location: `London`,
      notes: `favourite actor`
    }
  }
  title = 'address-book-angular';
  createNewContact() {
    console.log('Something clicked me!!!')
  }
}
