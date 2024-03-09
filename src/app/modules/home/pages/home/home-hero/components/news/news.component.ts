import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs'

import { BaseFormComponent } from '../../../../../../../core/abstracts/base-form.component'
import { ModalMessageComponent } from '../modal-message/modal-message.component'

import { HttpClient } from '@angular/common/http'
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  // @ViewChild('newsError') newsError!: ElementRef
  // elementRef = new ElementRef('.newsError')
  // elementRef!: ElementRef
  // formGroup = this.emailForm()
  // private apiUrl = 'https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/check-unique-email'

  constructor(private modalService: NgbModal) {

  }


  // sendSubscribersEmail(): void {
  //   this.submitted.emit()
  //   if (this.formGroup.invalid) {
  //     return this.formGroup.markAllAsTouched()
  //   } else {
  //     this.modalService.open(ModalMessageComponent)
  //   }
  // }
  showMessage(): void {
    this.modalService.open(ModalMessageComponent)
  }
}
