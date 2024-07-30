import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-sysadmin-sidebar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgClass
  ],
  templateUrl: './sysadmin-sidebar.component.html',
  styleUrl: './sysadmin-sidebar.component.css'
})
export class SysadminSidebarComponent {
  isFinanceOpen = false;

  toggleFinance() {
    this.isFinanceOpen = !this.isFinanceOpen;
  }
}
