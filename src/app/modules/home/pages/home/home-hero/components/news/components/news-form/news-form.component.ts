import { Observable } from 'rxjs'

import { BaseFormComponent } from '../../../../../../../../../core/abstracts/base-form.component'

import { EmailNameValidator } from './classes/email-name-validator'
import { EmailFormService } from './email-form.service'

import { HttpClient } from '@angular/common/http'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent extends BaseFormComponent implements AfterViewInit {
  @ViewChild('newsError') newsError!: ElementRef
  private apiUrl = 'https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/check-unique-email'
  elementRef!: ElementRef
  formGroup = this.emailForm()

  constructor(public formBuilder: FormBuilder, private http: HttpClient, private emailService: EmailFormService) {
    super()
  }

  ngAfterViewInit(): void {
    if (this.newsError) {
      this.elementRef = this.newsError
    }
  }

  emailForm(): FormGroup {
    return this.formBuilder.group({
      email: [
        null,
        {
          validators: [Validators.email, Validators.required],
          asyncValidators: EmailNameValidator.createValidator(this.emailService),
        },
      ],
    })
  }

  prepareRequest(): Observable<unknown> {
    const data = this.formGroup.getRawValue()

    return this.http.post(`${this.apiUrl}`, data)
  }
}
