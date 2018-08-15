import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contact';
import { ContactsService} from '../../modules/contacts/services/contacts.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  model: Contact = new Contact();
  dataService: ContactsService;

  constructor(private contactsService: ContactsService) {
    this.dataService = this.contactsService;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.addContact(this.model);
  }
}
