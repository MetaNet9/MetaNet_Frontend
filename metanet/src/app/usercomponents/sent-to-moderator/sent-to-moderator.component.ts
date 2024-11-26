import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sent-to-moderator',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent],
  templateUrl: './sent-to-moderator.component.html',
  styleUrl: './sent-to-moderator.component.css'
})
export class SentToModeratorComponent {

}