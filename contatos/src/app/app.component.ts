import { Component, OnInit } from '@angular/core';
import { Contact } from './services/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Nossa Lista de Contatos';

  contacts: Contact[] = []

  modal: boolean = false;

  selectedContact: Contact = {
    id: 0,
    nome: '',
    telefoneFixo: '',
    telefoneCelular: ''
  }

  constructor(private contactService: ContactService) {}

  showContacts() {
    return this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
      console.log(data);
    })
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact.id).subscribe(() => {
      const index = this.contacts.indexOf(contact)
      this.contacts.splice(index, 1)
    })
  }

  openModal(contact: Contact) {
    this.selectedContact.id = contact.id
    this.selectedContact.nome = contact.nome
    this.selectedContact.telefoneFixo = contact.telefoneFixo
    this.selectedContact.telefoneCelular = contact.telefoneCelular
    console.log(contact);
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
    this.showContacts()
  }

  ngOnInit(): void {
    this.showContacts()
  }


}
