import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    
  }
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId))
    {
          let options = {
          strings: ['Full-Stack Developer', 'Software Engineer', 'Front-End Developer', 'Back-End Developer'],
          typeSpeed: 50,
          backSpeed: 20,
          loop: true
    }
    let typing = new Typed('.typed-element', options)
    }
  }

}
