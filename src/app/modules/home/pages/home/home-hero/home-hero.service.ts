import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class HomeHeroService {
  targetVideo: HTMLElement | string = ''

  setTargetBlock(target: HTMLElement): void {
    this.targetVideo = target
  }
}
