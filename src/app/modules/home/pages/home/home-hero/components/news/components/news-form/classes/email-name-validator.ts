import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { EmailFormService } from '../email-form.service'

import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms'

export class EmailNameValidator {
  static createValidator(emailService: EmailFormService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return emailService.checkEmailExist(control.value).pipe(
        map((result: boolean) => {
          if (result) {
            return { emailAlreadyExisted: true }
          } else {
            return null
          }
        }),
      )
    }
  }
}
