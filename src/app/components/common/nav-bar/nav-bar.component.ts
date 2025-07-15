import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import e from 'express';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @ViewChild('Navigator') NavBar!:ElementRef
  @HostListener('window:scroll') AdjustNavBarOnScroll()
  {
    let NavBarNativeElement = this.NavBar.nativeElement;
    if(window.pageYOffset > 30)
    {
      NavBarNativeElement.classList.remove("py-4")
      NavBarNativeElement.classList.add('bg-Nav')
    }
    else if(window.pageYOffset <= 30)
      {
        NavBarNativeElement.classList.add("py-4")
        NavBarNativeElement.classList.remove('bg-Nav')
    }
  }
}
