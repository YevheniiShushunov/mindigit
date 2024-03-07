import { Component, HostListener, OnInit } from '@angular/core'

interface Contacts {
  phone: string
  email: string
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  portableScreen = false
  contacts: Contacts = {
    phone: '+38 097 162 85 29',
    email: 'hello@thedigital.gov.ua',
  }
  ngOnInit(): void {
    this.getScreenSize()
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(): void {
    const screenWidth = window.innerWidth
    if (screenWidth <= 576) {
      this.portableScreen = true
    } else {
      this.portableScreen = false
    }
  }
}
