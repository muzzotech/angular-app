import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  /*
  dataService: ContactsService;


  constructor(private contactsService: ContactsService) {
    this.dataService = this.contactsService;
  }

  ngOnInit(): void {
    this.dataService.getContacts().subscribe(contacts => this.contacts = contacts);
  }
*/
  private contactsRoute = 'http://localhost:3000/contacts';
  public contacts: Contact[];

  constructor(private http: HttpClient) { }

  getContacts() {
    this.http.get<Contact[]>(this.contactsRoute).subscribe(contacts => {
      this.contacts = contacts;
      console.log('Contacts', this.contacts);
    });
  }

  ngOnInit() {
    this.getContacts();
  }

}
