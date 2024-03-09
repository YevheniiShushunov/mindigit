import { Observable } from 'rxjs'

import { BaseFormComponent } from '../../../../../../../../../core/abstracts/base-form.component';

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

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
    super()
  }

  ngAfterViewInit(): void {
    if (this.newsError) {
      this.elementRef = this.newsError
    }
  }

  emailForm(email?: string): FormGroup {
    return this.formBuilder.group({
      email: ['' || email, [Validators.email, Validators.required]],
    })
  }

  prepareRequest(): Observable<unknown> {
    const data = this.formGroup.getRawValue()

    return this.http.post(`${this.apiUrl}`, data)
  }
}
