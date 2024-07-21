import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [BadgeModule, MenuModule,ButtonModule,CommonModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  router: any;


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






    this.items = [
      {
          // label: 'Guides',
          items: [
              {
                  label: 'Profile',
                  icon: 'pi pi-palette',
                  route: '/guides/csslayer'
              },
              {
                  label: 'Programmatic',
                  icon: 'pi pi-link',
                  command: () => {
                      this.router.navigate(['/home']);
                  }
              },
              {
                  label: 'External',
                  icon: 'pi pi-home',
                  url: 'https://angular.io//'
              }
          ]
      }
  ];





  }
}
