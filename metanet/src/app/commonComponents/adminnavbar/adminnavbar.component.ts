import { Component, OnInit } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminnavbar',
  standalone: true,
  imports: [BadgeModule, MenuModule,ButtonModule,CommonModule],
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
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
