import { firstValueFrom } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class HomeHeroService {
  private apiUrl = 'https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/create'
  constructor(private http: HttpClient) {}

  sendUserEmail(email: string): Promise<string> {
    return firstValueFrom(this.http.post(`${this.apiUrl}`, email))
  }
}
