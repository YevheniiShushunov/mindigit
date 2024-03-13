import { BlockVideoComponent } from './pages/home/home-hero/components/block-video/block-video.component'
import { ContactsComponent } from './pages/home/home-hero/components/contacts/contacts.component'
import { ModalMessageComponent } from './pages/home/home-hero/components/modal-message/modal-message.component'
import { NewsFormComponent } from './pages/home/home-hero/components/news/components/news-form/news-form.component'
import { NewsComponent } from './pages/home/home-hero/components/news/news.component'
import { NewsNumberPipe } from './pages/home/home-hero/pipes/news-number.pipe'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-hero/home-hero.component'
import { HomeProjectsComponent } from 'src/app/modules/home/pages/home/home-projects/home-projects.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeProjectsComponent,
    NewsNumberPipe,
    BlockVideoComponent,
    ContactsComponent,
    NewsComponent,
    ModalMessageComponent,
    NewsFormComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule, ReactiveFormsModule],
  exports: [NewsNumberPipe],
})
export class HomeModule {}
