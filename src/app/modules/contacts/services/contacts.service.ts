import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    {
      firstName: 'Papa',
      lastName: 'Smurf',
      phoneNumber: '310-555-1212',
      email: 'papazow@email.com'
     },
     {
      firstName: 'Derek',
      lastName: 'Jeter',
      phoneNumber: '212-555-1212',
      email: 'clutch@email.com'
     },
     {
      firstName: 'Sam',
      lastName: 'Keith',
      phoneNumber: '203-555-1212',
      email: 'themaxx@email.com'
     }
  ];

  addContact = (newContact: Contact): void => {
    this.contacts.push(newContact);
  }

  getContacts = (): Observable<Contact[]> => {
    return of(this.contacts);
  }

  constructor() { }
}
