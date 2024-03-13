import { Observable, delay, of, map } from 'rxjs'

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

export interface ApiAnswer {
  existed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class EmailFormService {
  private existedEmails: string[] = ['test@mail.com']
  private checkUrl = 'http://localhost:3000/emails'
  addEmailToExisted(email: string): void {
    this.existedEmails.push(email)
  }

  constructor(private http: HttpClient) {}

  checkEmail(email: string): Observable<ApiAnswer> {
    return this.http.post<ApiAnswer>(`${this.checkUrl}`, { email })
  }

  checkEmailExist(value: string): Observable<any> {
    const adoptedValue = value.toLowerCase()

    return this.checkEmail(adoptedValue).pipe(delay(3000))
  }
}
