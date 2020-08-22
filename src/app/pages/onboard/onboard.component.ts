import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {
  @ViewChild('splashContainer', {static: false}) splash: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterContentInit(){
    this.hiddeSplash()
  }

  hiddeSplash(){
    const splash = document.getElementById('splashContainer')
    splash.classList.add('hidden')
    setTimeout(() => {
      splash.style.display = 'none'
    }, 2000)
  }
}
