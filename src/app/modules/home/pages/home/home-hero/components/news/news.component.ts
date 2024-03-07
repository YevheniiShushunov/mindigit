import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { emailPattern } from '../../constants/validation.constant'
import { ModalMessageComponent } from '../modal-message/modal-message.component'

import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  email = this.emailForm()

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  emailForm(email?: string): FormGroup {
    return this.fb.group({
      email: ['' || email, [Validators.pattern(emailPattern), Validators.required]],
    })
  }
  sendSubscribersEmail(): void {
    if (this.email.invalid) {
      return this.email.markAllAsTouched()
    } else {
      this.modalService.open(ModalMessageComponent)
    }
  }
}
