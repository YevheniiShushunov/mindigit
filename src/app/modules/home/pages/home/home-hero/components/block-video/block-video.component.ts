import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-block-video',
  templateUrl: './block-video.component.html',
  styleUrls: ['./block-video.component.scss'],
})
export class BlockVideoComponent implements OnInit {
  @ViewChild('blockPlayer') blockPlayer?: ElementRef
  portableScreen = false
  isPlaying = false
  showVideo = false
  previewTitle = 'Презентація наживо'
  dateVideo = '11 березня, о 12:00'

  ngOnInit(): void {
    this.getScreenSize()
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(): void {
    const screenWidth = window.innerWidth

    if (screenWidth >= 1024) {
      this.portableScreen = true
    } else {
      this.portableScreen = false
    }
  }

  showBlockVideo(): void {
    this.showVideo = !this.showVideo
    this.isPlaying = true
  }

  startStopVideo(): void {
    const video = this.blockPlayer?.nativeElement
    if (this.isPlaying) {
      this.isPlaying = false
      video.pause()
    } else {
      this.isPlaying = true
      video.play()
    }
  }

  removePlayer(): void {
    this.showVideo = false
  }
}
