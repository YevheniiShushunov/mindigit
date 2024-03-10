import { Observable, delay, of } from 'rxjs'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EmailFormService {
  private existedEmails: string[] = ['test@mail.com']
  addEmailToExisted(email: string): void {
    this.existedEmails.push(email)
  }

  checkEmailExist(value: string): Observable<any> {
    const adoptedValue = value.toLowerCase()

    return of(this.existedEmails.some((a) => a === adoptedValue)).pipe(delay(1000))
  }
}
