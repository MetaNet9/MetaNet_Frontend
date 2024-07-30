import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-moderator-sidebar',
  standalone: true,
    imports: [
        NgIf,
        RouterLink
    ],
  templateUrl: './moderator-sidebar.component.html',
  styleUrl: './moderator-sidebar.component.css'
})
export class ModeratorSidebarComponent {

  onParagraphClick() {
    alert('UI is under development');
  }
}
