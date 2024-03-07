import { News } from './interfaces/home.interface'

import { Component } from '@angular/core'

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent {
  newsData: News[] = [
    {
      id: 1,
      title: 'Старт',
      text: 'Ліквідація ДАБІ\n' + '\n' + 'Створення Сервісної служби',
    },
    {
      id: 2,
      title: 'Березень — Травень 2020',
      text: 'Перехідний період\n' + '\n' + 'Мораторій на інспекційний держконтроль',
    },
    {
      id: 3,
      title: 'Червень 2020',
      text: 'Створення ДІМ\n' + '\n' + 'Запуск нового реєстру',
    },
    {
      id: 4,
      title: 'Вересень 2020',
      text: 'Державне агентство з питань технічного регулювання у містобудуванні',
    },
    {
      id: 5,
      title: 'Січень 2021',
      text: 'Запровадження страхування',
    },
  ]

  scrollToVideo(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
