import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {AccordionModule} from "primeng/accordion";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-moderator-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    RouterLink
  ],
  templateUrl: './moderator-side-bar.component.html',
  styleUrl: './moderator-side-bar.component.css'
})
export class ModeratorSideBarComponent {
    isFinanceOpen = false;
  
    toggleFinance() {
      this.isFinanceOpen = !this.isFinanceOpen;
    }

}
