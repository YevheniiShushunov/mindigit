import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Component } from '@angular/core'

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss'],
})
export class ModalMessageComponent {
  constructor(private modalService: NgbModal) {}

  closeModal(): void {
    this.modalService.dismissAll()
  }
}
