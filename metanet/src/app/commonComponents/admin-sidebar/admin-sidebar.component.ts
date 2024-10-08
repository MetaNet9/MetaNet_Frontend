import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {AccordionModule} from "primeng/accordion";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    RouterLink
  ],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  isFinanceOpen = false;

  toggleFinance() {
    this.isFinanceOpen = !this.isFinanceOpen;
  }
}
