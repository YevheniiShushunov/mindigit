import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'NewsNumber' })
export class NewsNumberPipe implements PipeTransform {
  transform(newsNumber: number): string | number {
    newsNumber++

    if (newsNumber <= 9) {
      return ('0' + newsNumber).slice(-2)
    } else {
      return newsNumber
    }
  }
}
