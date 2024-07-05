import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-landingnavbar',
  standalone: true,
  imports: [RouterOutlet,RouterModule,DialogModule],
  templateUrl: './landingnavbar.component.html',
  styleUrl: './landingnavbar.component.css'
})
export class LandingnavbarComponent implements OnInit {
  title = 'metanet';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Client-side code
      document.addEventListener('DOMContentLoaded', () => {
        // open
        const burger: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar-burger');
        const menu: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
          for (let i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', () => {
              for (let j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
              }
            });
          }
        }

        // close
        const close: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar-close');
        const backdrop: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
          for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', () => {
              for (let j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
              }
            });
          }
        }

        if (backdrop.length) {
          for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', () => {
              for (let j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
              }
            });
          }
        }
      });
    }
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
