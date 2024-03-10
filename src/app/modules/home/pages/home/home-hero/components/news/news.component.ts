import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { ModalMessageComponent } from '../modal-message/modal-message.component'

import { EmailFormService } from './components/news-form/email-form.service'

import { Component } from '@angular/core'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  constructor(private modalService: NgbModal, private emailService: EmailFormService) {}
  showMessage(): void {
    this.modalService.open(ModalMessageComponent)
  }
}
