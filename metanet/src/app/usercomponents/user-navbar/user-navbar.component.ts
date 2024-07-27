import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [BadgeModule, MenuModule, ButtonModule, CommonModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css',
})
export class UserNavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Client-side code
      document.addEventListener('DOMContentLoaded', () => {
        // open
        const burger: NodeListOf<HTMLElement> =
          document.querySelectorAll('.navbar-burger');
        const menu: NodeListOf<HTMLElement> =
          document.querySelectorAll('.navbar-menu');

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
        const close: NodeListOf<HTMLElement> =
          document.querySelectorAll('.navbar-close');
        const backdrop: NodeListOf<HTMLElement> =
          document.querySelectorAll('.navbar-backdrop');

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
            icon: 'pi pi-user',
            command: () => {
              this.router.navigate(['/userprofile']);
            },
          },
          {
            label: 'Transactions',
            icon: 'pi pi-wallet',
            command: () => {
              this.router.navigate(['/usertransactions']);
            },
          },
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            command: () => {
              this.router.navigate(['/usersettings']);
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-power-off',
            command: () => {
              this.router.navigate(['/home']);
            },
          },
        ],
      },
    ];
  }
}
